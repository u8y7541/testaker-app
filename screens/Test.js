import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../styles';
import Spacer from '../components/Spacer';
import Loader from '../components/Loader';

answers = []
import TestQuestion from '../components/TestQuestion';

export default class Test extends Component {
  static navigationOptions = {title: "Test"};

  constructor(props) {
    super(props)
    this.state = {ready: false}
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }

  async componentWillMount() {
    const apiUrl = 'http://13.58.54.246';
    const endpoint = '/getTest';
    
    const { testId, name } = this.props.navigation.state.params;
    
    try {
      const response = await fetch(apiUrl + endpoint + `?id=${testId}&name=${name}`, {method: 'POST'});

      const json = await response.json();

      this.test = json;
      
      this.setState({
        ready: true
      });
    } catch (err) {
      console.error(err);
    }

    answers = new Array(this.test.length)
  }

  submit = async () => {
    const { testId, name } = this.props.navigation.state.params;
    const response = await fetch('http://13.58.54.246/submitTest?' + `id=${testId}&name=${name}&answers=${JSON.stringify(answers)}`, {method: 'POST'})
    const result = await response.json()
    console.log(result)

    this.props.navigation.navigate('Finished')
  }

  render() {
    if (!this.state.ready) {
      return (<Loader />)
    }
    return (
      <View style = {styles.container}>
        <ScrollView>
          {
            (()=>{
              let counter = 1
              let result = []
              for (let q of this.test) {
                result.push(
                  <TestQuestion q = {q} questionNumber = {counter} key = {counter}/>
                )
                counter++;
              }
              return result
            })()
          }
          <Spacer height = {50} />
          <TouchableOpacity style = {styles.iconContainer} onPress = {this.submit}>
            <Text style = {styles.submitButtonText}>Submit Test</Text>
          </TouchableOpacity>
          <Spacer height = {50} />
        </ScrollView>
      </View>
    )
  }
}
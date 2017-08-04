import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../styles'
import Spacer from '../components/Spacer';

export default class Homescreen extends Component {
  static navigationOptions = {title: "Welcome"};

  constructor(props) {
    super(props)
    this.state = {name: '', testId: ''}
  }

  goToTest = () => {
    this.props.navigation.navigate('Test', {name: this.state.name, testId: this.state.testId})
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Enter your test ID and your name below:
        </Text>
        <Spacer height = {50} />
        <View style = {styles.innerContainer}>
          <TextInput placeholder = "Name" style = {styles.input}
                     onChangeText = {(text) => {this.setState({name: text})}} />
          <TextInput placeholder = "Test ID" style = {styles.input}
                     onChangeText = {(text) => {this.setState({testId: text})}} />
        </View>
        <Spacer height = {50} />
        <TouchableOpacity style = {styles.iconContainer} onPress = {this.goToTest}>
          <Image source = {require('../img/Arrow.png')} style = {styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
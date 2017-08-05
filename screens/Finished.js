import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated
} from 'react-native';
import styles from '../styles';
import Result from '../components/Result';
import Spacer from '../components/Spacer';
import Confetti from 'react-native-confetti';

export default class Finished extends Component {
  static navigationOptions = {title: "You're finished!"};

	constructor(props) {
		super(props)
    this.state = {fadeIn: new Animated.Value(0)}
	}

  componentDidMount() {
    if(this._confettiView) {
       this._confettiView.startConfetti();
    }
    //Animated.timing(this.state.fadeIn, {toValue: 1, duration: 1000}).start()
  }

  componentWillUnmount() {
      if (this._confettiView) {
          this._confettiView.stopConfetti();
      }
  }

  render() {
    const {result} = this.props.navigation.state.params
    let correctCount = 0;
    let questionCount = 0;
    for (question in result) {
      if (result[question]) {
        correctCount++
      }
      questionCount++
    }

    return (
      <View style = {styles.container}>
        <Confetti duration = {2000} ref={(node) => this._confettiView = node}/>
        <View style = {styles.testQuestionContainer}>
          <Text style = {styles.title}>Results</Text>
          <Text style = {styles.title}>Your score is {correctCount}/{questionCount}, or {Math.round(10 * 100 * correctCount/questionCount)/10}%.</Text>
          <Spacer height = {50} />
        </View>
        <ScrollView>
          {(()=>{
            let result2 = Object.keys(result).map((question, index) => (<Result questionNumber = {question.slice(1)}
                                                                                correct = {result[question]}
                                                                                key = {index} />))
            return result2
          })()}
        </ScrollView>
        <Text style = {styles.title}>Free response questions have not been graded yet.</Text>
      </View>
    )
  }
}
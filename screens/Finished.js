import React, { Component } from 'react';
import {
  View,
  Text,
  Animated
} from 'react-native';
import styles from '../styles';
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
    Animated.timing(this.state.fadeIn, {toValue: 1, duration: 1000}).start()
  }

  componentWillUnmount() {
      if (this._confettiView) {
          this._confettiView.stopConfetti();
      }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Confetti duration = {2000} ref={(node) => this._confettiView = node}/>
        <Animated.View style = {{opacity: this.state.fadeIn}}>
          <Text style = {styles.title}>Congratulations!</Text>
          <Text style = {styles.title}>You completed the assessment. Your test will be graded shortly. Please wait for your score.</Text>
        </Animated.View>
      </View>
    )
  }
}
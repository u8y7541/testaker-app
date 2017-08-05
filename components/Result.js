import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

export default class Result extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style = {styles.testQuestionContainer}>
				<Text style = {styles.testQuestion}>{this.props.questionNumber}. </Text>
				<Image source = {this.props.correct? require('../img/Correct.png') : require('../img/Incorrect.png')}
					   style = {styles.icon} />
			</View>
		)
	}
}
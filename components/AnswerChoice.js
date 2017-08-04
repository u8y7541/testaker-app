import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

export default class AnswerChoice extends Component {
	constructor(props) {
		super(props)
		this.state = {selected: false}
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
	}

	selectAnswer = () => {
		this.setState({selected: !this.state.selected})
		this.state.selected = !this.state.selected
		if (this.state.selected) {
			answers[this.props.questionNumber-1] = this.props.choice
		}
		else {
			answers[this.props.questionNumber-1] = null
		}
	}

	render = () => {
		return (
			<TouchableOpacity style = {this.state.selected? styles.selectedAnswerChoice : styles.answerChoice}
                              onPress = {this.selectAnswer}> 
				<Text style = {styles.answer}>{this.alphabet[this.props.choiceNumber] + ') ' + this.props.choice}</Text>
			</TouchableOpacity>
		)
	}
}
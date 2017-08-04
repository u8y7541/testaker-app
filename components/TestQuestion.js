import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native';
import styles from '../styles';
import AnswerChoice from './AnswerChoice';

export default class TestQuestion extends Component {
	constructor(props) {
		super(props)
	}

	render = () => {
		return (
		<View style = {styles.testQuestionContainer}>
            <Text style = {styles.testQuestion}>{this.props.questionNumber + '. ' + this.props.q.question}</Text>
                {
                  (()=>{
                    let result2 = []
                    let counter2 = 0
                    if (this.props.q.answerChoices == undefined) {
                      if (this.props.q.freeResponse) {
                        return (<TextInput multiline = {true}
                        				placeholder = "Enter your answer (free response)"
                        				style = {{height: 150}}/>)
                      }
                      else {
                        return (<TextInput placeholder = "Enter your answer"/>)
                      }
                    }
                    for (let choice of this.props.q.answerChoices) {
                      result2.push(
                      	<AnswerChoice key = {counter2} questionNumber = {this.props.questionNumber}
                      				  choiceNumber = {counter2} choice = {choice} />
                      )
                      counter2++;
                    }
                    return result2
                  })()
                }
        </View>
        )
	}
}
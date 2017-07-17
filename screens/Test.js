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

const test = [
  {
    question: "What is 2 + 2?",
    answerChoices: [1, 2, 3, 4]
  },
  {
    question: "Bob drives at 30 miles per hour. How long will he take to drive 60 miles?",
    answerChoices: ["2 seconds", "2 minutes", "2 hours", "2 days"]
  },
  {
    question: "The sum of two prime numbers is 2019. What is their product?",
    correctAnswer: 4034
  },
  {
    question: "What is binomial expansion? Explain."
  }
]

export default class Test extends Component {
	static navigationOptions = {title: "Test"};

  constructor(props) {
    super(props)
  }

	render() {
		return (
			<View style = {styles.container}>
        <ScrollView>
  				{
            (()=>{
              counter = 1
              result = []
              for (q of test) {
                result.push(
                  <View key = {counter} style = {styles.testQuestionContainer}>
                    <Text style = {styles.testQuestion}>{counter + '. ' + q.question}</Text>
                    {
                      (()=>{
                        result2 = []
                        counter2 = 0
                        if (q.answerChoices == undefined) {
                          if (q.correctAnswer == undefined) {
                            return (<TextInput multiline = {true} placeholder = "Enter your answer (free response)" style = {{height: 150}}/>)
                          }
                          else {
                            return (<TextInput placeholder = "Enter your answer"/>)
                          }
                        }
                        for (choice of q.answerChoices) {
                          result2.push(
                            <TouchableOpacity key = {counter2}
                                              style = {styles.answerChoice}
                                              onPress = {()=>{}}>
                              <Text style = {styles.answer}>{choice}</Text>
                            </TouchableOpacity>
                          )
                          counter2++;
                        }
                        return result2
                      })()
                    }
                  </View>
                )
                counter++;
              }
              return result
            })()
          }
          <TouchableOpacity style = {styles.submitButton}>
            <Text style = {styles.submitButtonText}>Submit Test</Text>
          </TouchableOpacity>
        </ScrollView>
			</View>
		)
	}
}
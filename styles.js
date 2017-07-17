import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 20,
    borderStyle: 'dashed',
    borderWidth: 5,
    borderRadius: 30,
    borderColor: '#f4a442'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  input: {
    width: 200
  },
  icon: {
    width: 50,
    height: 47,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
    borderStyle: 'dashed',
    borderWidth: 5,
    borderColor: 'gray'
  },
  testQuestionContainer: {
    padding: 20,
    width: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  testQuestion: {
    fontSize: 20
  },
  answerChoice: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
  },
  selectedAnswerChoice: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'lightgreen'
  },
  answer: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
  },
  submitButton: {
    alignSelf: 'center',
    padding: 30,
    borderRadius: 100,
    backgroundColor: '#4295f4'
  },
  submitButtonText: {
    fontSize: 25,
    color: 'white'
  }
});
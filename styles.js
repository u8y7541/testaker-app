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
    fontFamily: 'ComputerModernRoman',
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  input: {
    width: 200
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconContainer: {
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 100,
    borderStyle: 'dashed',
    borderWidth: 5,
    borderColor: 'gray'
  },
  testQuestionContainer: {
    padding: 20,
    minWidth: '100%',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: 'black'
  },
  testQuestion: {
    fontSize: 25,
    fontFamily: 'ComputerModernRoman',
    color: 'black'
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
    fontSize: 25,
    padding: 5,
    fontFamily: 'ComputerModernRoman',
    color: 'black',
    alignSelf: 'center'
  },
  submitButtonText: {
    fontSize: 25,
    fontFamily: 'ComputerModernRoman',
    color: 'green'
  }
});
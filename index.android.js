import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Spacer from './components/Spacer';

class Homescreen extends Component {
  static navigationOptions = {title:"Welcome"}
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Welcome to Testaker! Enter your test ID and your name below:
        </Text>
        <Spacer height = {50} />
        <View style = {styles.innerContainer}>
          <TextInput placeholder = "Name" style = {styles.input}></TextInput>
          <TextInput placeholder = "Test ID" style = {styles.input}></TextInput>
        </View>
        <Spacer height = {50} />
        <TouchableOpacity style = {styles.iconContainer}>
          <Image source = {require('./Arrow.png')} style = {styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});

const Testaker = StackNavigator({
  Home: {screen: Homescreen}
})

AppRegistry.registerComponent('Testaker', () => Testaker);

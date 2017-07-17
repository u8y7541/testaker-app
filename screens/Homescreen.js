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

  goToTest = () => {
    this.props.navigation.navigate('Test')
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Welcome to TestsRUs! Enter your test ID and your name below:
        </Text>
        <Spacer height = {50} />
        <View style = {styles.innerContainer}>
          <TextInput placeholder = "Name" style = {styles.input}></TextInput>
          <TextInput placeholder = "Test ID" style = {styles.input}></TextInput>
        </View>
        <Spacer height = {50} />
        <TouchableOpacity style = {styles.iconContainer} onPress = {this.goToTest}>
          <Image source = {require('../Arrow.png')} style = {styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}
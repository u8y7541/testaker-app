import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Homescreen from './screens/Homescreen';
import Test from './screens/Test';
import Finished from './screens/Finished';

const App = StackNavigator({
  Home: {screen: Homescreen},
  Test: {screen: Test},
  Finished: {screen: Finished}
})

AppRegistry.registerComponent('Testaker', () => App);
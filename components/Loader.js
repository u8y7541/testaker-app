import React, { Component } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import styles from '../styles';

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.state = {spin: new Animated.Value(0), onScreen: true}
  }
  componentDidMount() {
    //this.setState({spin: new Animated.Value(0)})
    Animated.timing(this.state.spin, {toValue: 100, duration: 2000, easing: Easing.linear}).start(this.animation)
  }
  componentWillUnmount() {
    this.state.onScreen = false
  }
  animation = () => {
    if (this.state.onScreen) {
      this.setState({spin: new Animated.Value(0)})
      Animated.timing(this.state.spin, {toValue: 100, duration: 2000, easing: Easing.linear}).start(this.animation)
    }
  }
	render() {
    rotation = this.state.spin.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg']
    })
		return (
			<View style = {styles.container}>
        <Text style = {styles.title}>{this.props.text === undefined? "Loading" : this.props.text}</Text>
				<Animated.Image 
          source = {require('../img/Loader.png')}
          style = {{width: 100, height: 100, transform: [{rotate: rotation}]}} />
			</View>
		)
	}
}
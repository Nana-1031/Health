import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Email from './src/login/email.js';
import Pass from './src/login/pass.js';
import Next from './src/login/next.js';
import Nextone from './src/login/nextone.js';



const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Sign: { screen: Signup },
  Email: { screen: Email },
Pass: {screen:Pass},
Next:{screen:Next},
Nextone:{screen:Nextone}
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


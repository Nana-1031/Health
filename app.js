import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Signup from './src/login/signup.js';
import Email from './src/login/email.js';
import Food from './src/login/food.js';
import Workout from './src/login/workout.js';
import Sleep from './src/login/sleep.js';
import Salt from './src/login/salt.js';
import Weight from './src/login/weight.js';
import Doctor from './src/login/doctor.js';
import Final from './src/login/final.js';

const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Sign: { screen: Signup },
  Email: { screen: Email },
Food: {screen:Food},
Workout:{screen:Workout},
Weight:{screen:Weight},
Sleep:{screen:Sleep},
Salt:{screen:Salt},
Doctor:{screen:Doctor},
Final:{screen:Final},

    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}


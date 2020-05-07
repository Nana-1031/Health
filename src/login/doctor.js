import React, { Component } from 'react';

import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Expo,
  Platform,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

class Doctor extends React.Component {
  state = {
    nutrients: [
      {
        imageLink: 'https://images.everydayhealth.com/images/coronavirus/tips-to-get-the-most-out-of-telemedicine-with-gynecologist-722x406.jpg',
        title: '',
      },
      {
        imageLink: 'https://naturopathicmd.com/wp-content/uploads/2018/01/qtq80-nb8oib.jpeg',
        title: 'Go for blood work',
      },
       {
        imageLink: 'https://myhealthonsite.com/wp-content/uploads/2015/11/Depositphotos_4794064_l-2015.jpg',
        title: 'Monitor your heart beat',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>Doctor Visits</Text>

        <ScrollView>
          {this.state.nutrients.map(pass => (
            <View style={styles.characterlistContainer}>
              <ScrollView>
                <Text style={styles.titles}>{pass.title}</Text>
              </ScrollView>
              <View style={styles.middleContainer}>
                <Image
                  source={{ uri: pass.imageLink }}
                  style={{
                    height: 200,
                    width: 200,
                    justifyContent: 'center',
                    margin: 40,
                    alignContent: 'center',
                  }}
                />
              </View>
            </View>
          ))}
          <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Final')}>
              <View style={styles.touchableButton1}>
                <Text style={styles.buttonText}>Learn more->></Text>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
   buttonText: {
      fontSize: 14,
        fontWeight:'bold',
    },
  touchableButton1: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
  },

  logoText: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});
export default Doctor;

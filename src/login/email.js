import React, { Component } from 'react'


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight} from 'react-native';


class Email extends React.Component {


  render() {
     
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>

<View style={styles.textContainer}>

<Image source ={{uri: 'http://mspmag.com/downloads/45660/download/teenmentalhealth.png?cb=4bfd483e006d61abdd9e582d0e6df9ac'}}
 style={{ height: 80, width: 80, justifyContent: 'center', margin: 40, alignContent: 'center' }}
/>

</View>

          <Text style={styles.logoText}>WHAT'S YOUR EMAIL ADDRESS</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            
          
           <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Signup')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Lets Get Started  
                      
                        </Text>
                    </View>
                   
                    
                </TouchableHighlight>
            </View>
            
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

}





const styles = StyleSheet.create({

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 43,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},

touchableButton1: {
        backgroundColor: 'blue',
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
  fontSize: 15,
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
},

 buttonText: {
     
        color: 'white',
        fontSize: 14,
        fontWeight:'bold',
 },
 
});


export default Email;

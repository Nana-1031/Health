import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Workout extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://media1.popsugar-assets.com/files/thumbor/XJJEB1cIhAyU5K9tzgJidhvzxVM/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/04/13/738/n/1922729/87033ecd04363271_standingab.gif',
    title:' STANDING ABS',
  },
  {
  imageLink:'https://media.giphy.com/media/7zuAQ6ebll6maa2rBF/giphy-downsized-large.gif',
    title:'PLANKS',
},
{
 imageLink:'https://media1.popsugar-assets.com/files/thumbor/Iu8waoj6rmL6c7B8gZUdS1ZIa3I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/08/791/n/1922729/c4943793a2ba2dd5_SlowerClimbers.gif',
    title:'MOUNTAIN CLIMB',
  
},
  ]
}


  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoText}>
      Workout Tips to stay healthy 
      </Text>

      <ScrollView>
      {this.state.nutrients.map((pass)=>(
        <View style={styles.characterlistContainer}>
        <ScrollView>
        <Text style={styles.titles}>
        {pass.title}
        </Text>
        

        </ScrollView>
        <View style={styles.middleContainer}>
        <Image source={{uri:pass.imageLink}}
    style={{ height: 180, width: 180, justifyContent: 'center', margin: 40, alignContent: 'center' }}
 />

 </View>
 </View>
      ))}
      <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Weight')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            ClICK
                            
                      
                        </Text>
                    </View>
                   
                    
                </TouchableHighlight>
            </View>
      </ScrollView>
      </View>
      
    )
  }
  }
  const styles= StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'lightpink',
 
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
  fontWeight: "800",
  marginBottom: 10,
   marginTop: 10,
  textAlign: 'center',
    },
  });
  export default Workout;




import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Final extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://i.pinimg.com/originals/99/32/a7/9932a71b546583598a034cdebe1f3690.jpg',
    title:'',
  },
 
  

  ]
}


  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoText}>
      You have reach the end of this section!!!
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
     style={{ height: 330, width: 330, justifyContent: 'center', margin: 40, alignContent: 'center' }} 
 />

 </View>
 </View>
      ))}
      <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Email')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Homepage->>  
                      
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
      backgroundColor:'lightgrey',
 
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
  export default Final;




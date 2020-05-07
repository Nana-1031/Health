import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Sleep extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://scx2.b-cdn.net/gfx/news/2018/thebestfoods.jpg',
    title:'',
  },
  {
    imageLink:'https://www.ingredia-nutritional.com/wp-content/uploads/2018/12/lactium-for-sleep-1.jpg',
    title:'Tips for good sleep',
  },
 
  

  ]
}


  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoText}>
      Sleep Schedule
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
     style={{ height: 200, width: 200, justifyContent: 'center', margin: 40, alignContent: 'center' }} 
 />

 </View>
 </View>
      ))}
      <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Doctor')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Learn more->>  
                      
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
      backgroundColor:'lightblue',
 
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
  export default Sleep;




import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Food extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://www.masteringdiabetes.org/wp-content/uploads/2018/09/fruits-and-spinach-breakfast.jpg',
    title:'Make half your plate fruits and vegetables',
  },
  {
  imageLink:'https://static.toiimg.com/photo/70724157.cms',
    title:'Drink water instead of sugary drinks',
},
{
 imageLink:'https://www.nutritionadvance.com/wp-content/uploads/2018/11/variety-of-protein-foods-on-a-wooden-table.jpg',
    title:'Choose a variety of lean protein foods',
  
},
  ]
}


  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoText}>
      Tips on maintaining a healthy diet...
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
              onPress={() => this.props.navigation.navigate('Salt')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            CLICK->>  
                      
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
  export default Food;




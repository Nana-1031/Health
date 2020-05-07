import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Salt extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://www.heart.org/-/media/images/healthy-living/healthy-eating/sugar_types.jpg',
    title:'How much salt and sugar should we eat on a daily?',
  },
  {
  imageLink:'https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/f2/f0/6c/shutterstock-615908132.jpg',
    title:'For women 24 grams, 36 for men',
},
{
 imageLink:'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodmanufacture.co.uk/article/2018/01/18/report-on-salt-replacement-welcomed-by-lobby-group/7692378-6-eng-GB/Report-on-salt-replacement-welcomed-by-lobby-group_wrbm_large.jpg',
    title:'2,300 mg per day',
  
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
    style={{ height: 200, width: 200, justifyContent: 'center', margin: 40, alignContent: 'center' }}
 />

 </View>
 </View>
      ))}
      <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Workout')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Lets Workout->>  
                      
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
      backgroundColor:'white',
 
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
  export default Salt;




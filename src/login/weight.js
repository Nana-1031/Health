import React, { Component } from "react";


import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Expo,Platform, StyleSheet, Button, Image, TouchableHighlight,ScrollView} from 'react-native';


class Weight extends React.Component {
state = {
  
  nutrients:[
    {
    imageLink:'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-1/11035-5_Rules_to_Weighing_Yourself_and_When_to_Ditch_the_Scale_Infographic-01.jpg?w=1155&h=2940',
    title:'',
  },
 {
    imageLink:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/images/7am-1-of-1-1492862401.jpg?resize=480:*',
    title:'Dont wear extra clothes on the scale',
  },
  {
    imageLink:'https://accordingtoq.com/wp-content/uploads/2019/06/img_6831_facetune_13-06-2019-05-30-16.jpg',
    title:'Try wearing waistbeads if its helpful',
  },
  

  ]
}


  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.logoText}>
      Weigh Yourself
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
     style={{ height: 230, width: 230, justifyContent: 'center', margin: 40, alignContent: 'center' }} 
 />

 </View>
 </View>
      ))}
      <View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sleep')}
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
      backgroundColor:'lightgrey',
 
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
  export default Weight;




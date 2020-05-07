import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {

  
  

 
  

     
               
  

  render() {
    return (


      <View style={styles.container}>
       <Text style={styles.logoText}>
       WELCOME TO HEALTH
       </Text>

          <Image source ={{uri: 'http://mspmag.com/downloads/45660/download/teenmentalhealth.png?cb=4bfd483e006d61abdd9e582d0e6df9ac'}}
 style={{ height: 200, width: 320, justifyContent: 'center', }}
/>
          
          
            


 

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Sign')}
            >
            
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                             START HERE!
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  

   touchableButton1: {
        backgroundColor: 'white',
        height: 30,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 1,
         borderRadius: 30,
   
   
    },

    buttonText: {
      fontSize: 14,
        fontWeight:'bold',
    },
    logoText: {
  fontSize: 25,
  fontWeight: "800",
  marginBottom: 30,
   marginTop: 10,
  textAlign: 'center',
 
},
    

});


export default Homescreen;

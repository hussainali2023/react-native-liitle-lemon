import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
    return (
      
            <View style={welcomeStyle.container}>
                <View>
                    <Text style={welcomeStyle.title}>Welcome to Little Lemon</Text>
                </View>
                <View>
                    <Text style={welcomeStyle.subTitle}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                    </Text>
                </View>
                <View>
  <Text style={{color: "white"}}>Some text
    <Text style={{color: "white"}}> Some more text</Text>
  </Text>
</View>
            </View>
       
    );
};

export default Welcome;

const welcomeStyle = StyleSheet.create({
    container: {
        flex: 0.75
    },
    title: {
        textAlign: 'center',
         color: 'white' ,
          fontSize: 35 , 
          fontWeight: '800' , 
          paddingTop:60 , 
          paddingBottom: 60
    },
    subTitle: {
        textAlign: 'center', 
        color: 'white' ,
        ontSize: 26 , 
        fontWeight: '700', 
        padding:10
    }
})
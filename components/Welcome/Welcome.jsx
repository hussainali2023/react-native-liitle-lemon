import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const Welcome = () => {
    return (
        <SafeAreaView style={{flex:0.8}}>
            <View >
                <View>
                    <Text style={{textAlign: 'center', color: 'white' , fontSize: 35 , fontWeight: '800' , paddingTop:60 , paddingBottom: 60}}>Welcome to Little Lemon</Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center', color: 'white' , fontSize: 26 , fontWeight: '700', padding:10}}>
                        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Welcome;
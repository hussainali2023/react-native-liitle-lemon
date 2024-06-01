import React from 'react';
import { ScrollView, Text, View } from 'react-native';


const items = [
    'India \n Pakistan \n Afganistan \n Iran \n Irak \n Saudi Arabia \n Oman \n Yemen \n United Arab Emirates \n China \n Japan \n Banglades \n Srilanka \n Russia \n Malayasia \n Indonesia \n Japan \n South Korea \n North Korea \n South Africe \n North Africa \n Chile \n Sudan \n Pakistan \n Afganistan \n Iran \n Irak \n Saudi Arabia \n Oman \n Yemen \n United Arab Emirates \n China \n Japan \n Banglades \n Srilanka \n Russia \n Malayasia \n Indonesia \n Japan \n South Korea \n North Korea \n South Africe \n North Africa \n Chile \n Sudan \n Pakistan \n Afganistan \n Iran \n Irak \n Saudi Arabia \n Oman \n Yemen \n United Arab Emirates \n China \n Japan \n Banglades \n Srilanka \n Russia \n Malayasia \n Indonesia \n Japan \n South Korea \n North Korea \n South Africe \n North Africa \n Chile \n Sudan \n Pakistan \n Afganistan \n Iran \n Irak \n Saudi Arabia \n Oman \n Yemen \n United Arab Emirates \n China \n Japan \n Banglades \n Srilanka \n Russia \n Malayasia \n Indonesia \n Japan \n South Korea \n North Korea \n South Africe \n North Africa \n Chile \n Sudan'
]

const MenuItems = () => {
    return (
        <View style={{flex: 1,}}>
<ScrollView indicatorStyle={'white'} style={{padding:40, backgroundColor: 'black',}}>
    <Text style={{fontSize:40, flexWrap: 'wrap', color: 'white'}}>
        View Menu
    </Text>
    <Text style={{color: 'white', fontSize:30}}>{items[0]}</Text>

    <View>
  <Text>Some text
    <Text> Some more text</Text>
  </Text>
</View>
</ScrollView>


        </View>
    );
};

export default MenuItems;
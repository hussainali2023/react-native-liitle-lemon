import {SafeAreaView, Text, View} from 'react-native';

const Footer = () => {
  return (
    <SafeAreaView style={{flex:0.1}}>
      <View>
        <Text style={{backgroundColor: 'yellow', textAlign: 'center', color: 'green', padding:10, fontWeight:700}}>
          All rights reserved by Hussain, 2024
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Footer;

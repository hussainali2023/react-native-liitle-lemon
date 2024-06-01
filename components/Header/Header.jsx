import {SafeAreaView, Text, View} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={{flex:0.1}}>
      <View
        style={{backgroundColor: 'yellow', padding: 15, alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 800, color: 'green'}}>
          {' '}
          Hussain{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

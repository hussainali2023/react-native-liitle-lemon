import React from 'react';
import {View} from 'react-native';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import MenuItems from './components/MenuItems/MenuItems';

const App = () => {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Header />
      <Welcome />
      <MenuItems />
      <Footer />
    </View>
  );
};

export default App;

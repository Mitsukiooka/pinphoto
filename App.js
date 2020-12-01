// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { StackNavigator } from 'react-navigation';

// import Appbar from './src/components/Appbar';
// import SignupScreen from './src/screens/SignupScreen';
import PinPhotoScreen from './src/screens/PinPhotoScreen';

const App = createStackNavigator({
  Home: { screen: PinPhotoScreen },
}, {
  defaultNavigationOptions: {
    // ... オプション
  }
});

export default createAppContainer(App);


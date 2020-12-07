// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { StackNavigator } from 'react-navigation';

// import Appbar from './src/components/Appbar';
// import SignupScreen from './src/screens/SignupScreen';
import PinPhotoScreen from './src/screens/PinPhotoScreen';
import PinPhotoDetailScreen from './src/screens/PinPhotoDetailScreen'; 
import PhotoEditScreen from './src/screens/PhotoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


const App = createStackNavigator({
  Home: { screen: PinPhotoScreen },
  PinPhotoDetail: { screen: PinPhotoDetailScreen },
  PhotoEdit: { screen: PhotoEditScreen },
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Pinphoto',
    headerStyle: {
      backgroundColor: '#BB01BB'
    },
  },
});

export default createAppContainer(App);


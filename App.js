// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import PhotoEditScreen from './src/screens/PhotoEditScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <PhotoEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffddf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});

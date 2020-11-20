// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>PinPhoto</Text>
        </View>
      </View>

      <View style={styles.pinphoto}>
        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>アイテム</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>

        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>アイテム</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>

        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>アイテム</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>

        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>アイテム</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>

        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>アイテム</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>

        <View>
          <Text>+</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingTop: 30,
    backgroundColor: '#4630EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  }
});

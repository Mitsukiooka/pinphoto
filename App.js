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

        <View style={styles.addButton}>
          <Text style={styles.addButtonTitle}>+</Text>
        </View>
      </View>

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
  pinphoto: {
    width: '100%',
    flex: 1,
  },
  pinphotoItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    backgroundColor: '#fff',
  },
  photoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  photoDate: {
    fontSize: 12,
    color: '#a2a2a2'
  },
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    paddingTop: 30,
    backgroundColor: '#4630EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#e31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 10,
  },
  addButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff'
  }
});

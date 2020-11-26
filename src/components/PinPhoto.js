import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class PinPhoto extends React.Component {
  render () {
    return (
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
    </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default PinPhoto;
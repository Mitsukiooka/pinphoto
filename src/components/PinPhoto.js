import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class PinPhoto extends React.Component {
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('PinPhotoDetail', {　memo: item　}); }}>
        <View style={styles.pinphotoItem}>
          <Text style={styles.photoTitle}>{item.body}</Text>
          <Text style={styles.photoDate}>2020/11/20</Text>
        </View>
      </TouchableHighlight>
    )
  }
  render () {
    return (
    <View style={styles.pinphoto}>
      <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)}></FlatList>
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
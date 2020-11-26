import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class PhotoEditScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.PhotoEditInput} multiline value='hi'/>
        <CircleButton name='check' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  PhotoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  }
});

export default PhotoEditScreen;
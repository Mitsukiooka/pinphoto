import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class PhotoCreateScreen extends React.Component {
  state = {
    body: '',
  }
  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/photos`).add({
      body: this.state.body,
      createdOn: new Date(), 
    })
      .then((docRef) => {
        console.log(docRef.id);
        console.log(params)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.PhotoEditInput} 
        multiline 
        value={this.state.body}
        onChangeText={(text) => { this.setState({ body: text}); }}/>
        <CircleButton name='check' onPress={this.handlePress.bind(this)}/>
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

export default PhotoCreateScreen;
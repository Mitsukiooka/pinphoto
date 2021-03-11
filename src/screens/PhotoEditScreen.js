import firebase from 'firebase';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class PhotoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }
  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ 
      body: params.memo.body,
      key: params.memo.key
    });
  }
  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    console.log(this.state);
    db.collection(`users/${currentUser.uid}/photos`).doc(this.state.key)
      .update({
        body: this.state.body,
      })
      .then(() => {
        console.log('succsess!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.PhotoEditInput} 
        multiline 
        value={this.state.body}
        onChangeText={ (text) => { this.setState( { body: text } ); }}
        />
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

export default PhotoEditScreen;
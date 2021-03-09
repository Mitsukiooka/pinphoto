import firebase from 'firebase';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import PinPhoto from '../components/PinPhoto';
import CircleButton from '../elements/CircleButton';


//
class PinPhotoScreen extends React.Component {
  state = {
    memoList: [],
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/photos`)
      .get()
      .then((querySnapshot) => {
        const memolist = [];
        querySnapshot.forEach((doc) => {
          memolist.push({...doc.data(), key: doc.id });
        });
        this.setState( { memoList: memolist });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('PhotoCreate')
  }
  render (){
    return (
      <View style={styles.container}>
        <PinPhoto memoList={this.state.memoList} navigation={this.props.navigation}/>
        <CircleButton name='plus' onPress={this.handlePress.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6'
  },
});

export default PinPhotoScreen;
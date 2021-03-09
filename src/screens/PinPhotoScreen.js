import React from 'react';
import { StyleSheet, View } from 'react-native';

import PinPhoto from '../components/PinPhoto';
import CircleButton from '../elements/CircleButton';


//
class PinPhotoScreen extends React.Component {
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('PhotoCreate', {currentUser: params.currentUser})
  }
  render (){
    return (
      <View style={styles.container}>
        <PinPhoto navigation={this.props.navigation}/>
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
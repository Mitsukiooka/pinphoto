import React from 'react';
import { StyleSheet, View } from 'react-native';

import PinPhoto from '../components/PinPhoto';
import CircleButton from '../elements/CircleButton';

class PinPhotoScreen extends React.Component {
  render (){
    return (
      <View style={styles.container}>
        <PinPhoto />
        <CircleButton name='plus' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default PinPhotoScreen;
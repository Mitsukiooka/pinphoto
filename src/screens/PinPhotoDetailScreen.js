import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class PinPhotoDetailScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.PinPhotoHeader}>
          <View>
            <Text style={styles.PinPhotoHeaderTitle}>春日亭</Text>
            <Text style={styles.PinPhotoHeaderDate}>2020/11/26</Text>
          </View>
        </View>

        <View style={styles.PinPhotoContent}>
          <Text>昨日通った気になる油そば屋さん</Text>
        </View>

        <CircleButton name='pencil' color='white' style={styles.editButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
  },
  PinPhotoHeader: {
    height: 100,
    backgroundColor: '#BB01BB',
    justifyContent: 'center',
    padding: 10,
  },
  PinPhotoHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  PinPhotoHeaderDate: {
    fontSize: 12,
    color: '#ffff',
  },
  PinPhotoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  editButton: {
    top: 75,

  },
});


export default PinPhotoDetailScreen;
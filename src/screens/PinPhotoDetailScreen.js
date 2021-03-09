import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { memo } from 'react/cjs/react.production.min';
import CircleButton from '../elements/CircleButton';

class PinPhotoDetailScreen extends React.Component {
  state = {
    memo: {},
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }
  render () {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.PinPhotoHeader}>
          <View>
            <Text style={styles.PinPhotoHeaderTitle}>{memo.body}</Text>
            <Text style={styles.PinPhotoHeaderDate}>{String(memo.createdOn)}</Text>
          </View>
        </View>

        <View style={styles.PinPhotoContent}>
          <Text>{memo.body}</Text>
        </View>

        <CircleButton name='pencil' color='white' style={styles.editButton} onPress={() => {this.props.navigation.navigate('PhotoEdit')}}/>
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
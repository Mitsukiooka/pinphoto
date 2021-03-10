import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { memo } from 'react/cjs/react.production.min';
import CircleButton from '../elements/CircleButton';

class PinPhotoDetailScreen extends React.Component {
  state = {
    memo: {},
  }
  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }
  dateString(date) {
    const str = date.toDate().toISOString();
    return str.split('T')[0];
  }
  render () {
    const { memo } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.PinPhotoHeader}>
          <View>
            <Text style={styles.PinPhotoHeaderTitle}>{memo.body.substring(0, 10)}</Text>
            <Text style={styles.PinPhotoHeaderDate}>{this.dateString(memo.createdOn)}</Text>
          </View>
        </View>

        <View style={styles.PinPhotoContent}>
          <Text style={styles.memoBody}>{memo.body}</Text>
        </View>

        <CircleButton name='pencil' color='white' style={styles.editButton} 
        onPress={() => {this.props.navigation.navigate('PhotoEdit', { memo })}}/>
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
  memoBody: {
    lineHeight: 22,
    fontsize: 15
  }
});


export default PinPhotoDetailScreen;
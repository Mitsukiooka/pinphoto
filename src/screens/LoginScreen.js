import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';


class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }
  handleSubmit() {
    // this.props.navigation.navigate('Home')

    // Log in!!
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput 
        style={styles.input} 
        value={this.state.email} 
        onChangeText={ (text) => { this.setState( { email: text } ); } }
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email Address"
        />
        <TextInput 
        style={styles.input} 
        value={this.state.password}
        onChangeText={(text) => { this.setState( { password: text } ); }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#e31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  }
});

export default LoginScreen;
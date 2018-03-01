/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username:'Saquib',
      email:''
    }
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _handleSubmit(){
    const {username} = this.state
    alert(username)
  }
  render() {
    const {username,email} = this.state

    return (
      <View style={styles.jhgfjh}>
      {/* <Text>{username}</Text> */}
      <TextInput
        onChangeText={(username) => this.setState({username})}
        value={username}
      />   
      <Text>{username}</Text>     
      <Button onPress={this._handleSubmit} title="Submit"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  jhgfjh: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { RNLockScreen } from 'react-native-lock-screen';
import { Calculator } from 'react-native-calculator'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <RNLockScreen type={RNLockScreen.Type.Pattern} mode={RNLockScreen.Mode.Verify} onCapture={lock => {
          console.log("lock: " + lock)
          }} onVerified={() => {
            console.log('lock verified')
          }}
          lock={'123'}
        /> */}
        <Calculator
          style={{ 
            flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center'
           }}
          onTextChange={text => {
            console.log(text)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
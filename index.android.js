/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class albums extends Component {
  render() {
    return (
        <View>
          <Header headerText ={'Albums'}/>
          <AlbumList/>
        </View>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//     fontSize: 20
//   },
// });

AppRegistry.registerComponent('albums', () => albums);

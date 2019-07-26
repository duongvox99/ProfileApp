import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Header from './components/Header';
import InfoUser from './components/InfoUser';
import TotalCount from './components/TotalCount';
import PhotoWrapper from './components/PhotoWrapper';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <InfoUser />
        <TotalCount />
        <PhotoWrapper />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

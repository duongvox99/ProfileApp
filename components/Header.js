import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Scale from './Scale';
const SCALE = Scale.scale;

export default class Header extends Component {
  onPressBack = () =>{
    alert("Clicked On BACK Button !!!");
  }
  onPressFilter = () =>{
    alert("Clicked On FILTER Button !!!");
  }

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressBack}
        >
          <Ionicons name="md-arrow-back" size={26 * SCALE} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressFilter}
        >
          <Ionicons name="md-menu" size={26 * SCALE} color="gray" />
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

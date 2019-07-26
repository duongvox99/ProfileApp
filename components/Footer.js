import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

import Scale from './Scale';
const SCALE = Scale.scale;

export default class Header extends Component {
    onPressHome = () => {
        alert("Clicked On HOME Button !!!");
    }
    onPressAdd = () => {
        alert("Clicked On ADD Button !!!");
    }
    onPressProfile = () => {
        alert("Clicked On PROFILE Button !!!");
    }

    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressHome}
                >
                    <Feather name="home" size={26 * SCALE} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressAdd}
                >
                    <Ionicons name="md-add-circle-outline" size={26 * SCALE} color="gray" />
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressProfile}
                >
                    <Feather name="user" size={26 * SCALE} color="gray" />
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.07,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        flex: 0.22,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

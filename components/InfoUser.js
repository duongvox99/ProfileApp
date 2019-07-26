import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

import Scale from './Scale';
const SCALE = Scale.scale;

const POLO_BLUE_COLOR = 'rgb(141, 203, 235)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';
const SMALL_TEXT_COLOR = '#ADADC1';

export default class InfoUser extends Component {
  onPressFollow = () => {
    alert("followed");
  }
  onPressMessage = () => {
    alert("message sended");
  }

    render() {
        return (
            <View style={styles.userInfoArea}>
                <View style={styles.avatarUser}>
                    <Image style={styles.avatar}
                        source={require('../assets/avatar.png')}
                    />
                </View>

                <View style={styles.infoUser}>
                    <View style={styles.name_job}>
                        <Text style={styles.name}>Duong Vo</Text>
                        <Text style={styles.job}>Developer</Text>
                    </View>

                    <View style={styles.buttonArea}>
                        <TouchableOpacity
                            style={styles.followButton}
                            onPress={this.onPressFollow}
                        >
                            <LinearGradient
                                colors={[FOLLOW_COLOR, POLO_BLUE_COLOR]}
                                style={styles.followGradient}>
                                <Text style={styles.followText}>Follow</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.messageButton}
                            onPress={this.onPressMessage}
                        >
                            <LinearGradient
                                colors={[SEND_MESSAGE_COLOR, POLO_BLUE_COLOR]}
                                style={styles.followGradient}>
                                <Ionicons name="md-send" size={26 * SCALE} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userInfoArea: {
        flexDirection: 'row',
        flex: 0.21,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarUser: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        height: 100 * SCALE,
        width: 100 * SCALE,
        borderRadius: 50 * SCALE,
        borderColor: 'gray',
        borderWidth: 1 * SCALE,
    },
    infoUser: {
        flex: 0.65,
        justifyContent: 'center',
    },
    name_job: {
        flex: 0.6,
        justifyContent: 'center',
    },
    buttonArea: {
        flex: 0.4,
        flexDirection: 'row',
    },
    name: {
        fontSize: 22 * SCALE,
        fontWeight: 'bold',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5 * SCALE,
    },
    job: {
        fontSize: 18 * SCALE,
        fontWeight: '400',
        color: SMALL_TEXT_COLOR,
    },

    followButton: {
        flex: 0.6,
        borderRadius: 25 * SCALE,
        height: 35 * SCALE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    followGradient: {
        // flex: 1,
        borderRadius: 25 * SCALE,
        height: 35 * SCALE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageButton: {
        flex: 0.25,
        marginLeft: 10 * SCALE,
        borderRadius: 20 * SCALE,
        height: 35 * SCALE,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    sendGradient: {
        flex: 1,
        borderRadius: 25 * SCALE,
        height: 35 * SCALE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    followText: {
        fontSize: 18 * SCALE,
        fontWeight: '400',
        color: 'white'
    },
});
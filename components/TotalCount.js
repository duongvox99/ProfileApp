import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Scale from './Scale';
const SCALE = Scale.scale;

const SMALL_TEXT_COLOR = '#ADADC1';

export default class TotalCount extends Component {
    render() {
        return (
            <View style={styles.totalCount}>
                <View style={styles.countWrapper}>
                    <Text style={styles.countNumber}>210</Text>
                    <Text style={styles.countLabel}>Photos</Text>
                </View>
                <View style={styles.countWrapper}>
                    <Text style={styles.countNumber}>15k</Text>
                    <Text style={styles.countLabel}>Followers</Text>
                </View>
                <View style={styles.countWrapper}>
                    <Text style={styles.countNumber}>605</Text>
                    <Text style={styles.countLabel}>Followings</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    totalCount: {
        flex: 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    countWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    countNumber: {
        fontSize: 18 * SCALE,
        fontWeight: '500',
    },
    countLabel: {
        fontSize: 16 * SCALE,
        fontWeight: '400',
        color: SMALL_TEXT_COLOR,
    },
});

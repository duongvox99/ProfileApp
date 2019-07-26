import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';

import Scale from './Scale';
const SCALE = Scale.scale;


const imgData = [
    { id: 1, imgSource: require('../assets/img/1.jpg') },
    { id: 2, imgSource: require('../assets/img/2.jpg') },
    { id: 3, imgSource: require('../assets/img/3.jpg') },
    { id: 4, imgSource: require('../assets/img/4.jpg') },
    { id: 5, imgSource: require('../assets/img/5.jpg') },
    { id: 6, imgSource: require('../assets/img/6.jpg') },
    { id: 7, imgSource: require('../assets/img/7.jpg') },
    { id: 8, imgSource: require('../assets/img/8.jpg') },
    { id: 9, imgSource: require('../assets/img/9.jpg') },
    { id: 10, imgSource: require('../assets/img/10.jpg') },
    { id: 11, imgSource: require('../assets/img/11.jpg') },
    { id: 12, imgSource: require('../assets/img/12.jpg') },
    { id: 13, imgSource: require('../assets/img/13.jpg') },
    { id: 14, imgSource: require('../assets/img/14.jpg') },
    { id: 15, imgSource: require('../assets/img/15.jpg') },
    { id: 16, imgSource: require('../assets/img/16.jpg') },
    { id: 17, imgSource: require('../assets/img/17.jpg') },
    { id: 18, imgSource: require('../assets/img/18.jpg') },
    { id: 19, imgSource: require('../assets/img/19.jpg') },
    { id: 20, imgSource: require('../assets/img/20.jpg') }
];
const centerImgData = Math.floor(imgData.length / 2);


export default class PhotoWrapper extends Component {
    render() {
        return (
            <View style={styles.photoWrapper}>
                <ScrollView contentContainerStyle={styles.photoScrollView}>
                    <View style={styles.photoColumn}>
                        {imgData.slice(0, centerImgData).map(item => {
                            return <Image key={item.id} source={item.imgSource} style={styles.image} />;
                        })}
                    </View>
                    <View style={styles.photoColumn}>
                        {imgData.slice(centerImgData).map(item => {
                            return <Image key={item.id} source={item.imgSource} style={styles.image} />;
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    photoWrapper: {
        flex: 0.5,
    },

    photoScrollView: {
        flexDirection: 'row',
    },
    photoColumn: {
        flex: 0.5,
        alignItems: 'center',
    },
    image: {
        width: 160 * SCALE,
        height: 160 * SCALE,
        borderRadius: 10 * SCALE,
        marginBottom: 20 * SCALE,
    },
});

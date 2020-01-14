import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ImageDetail = ({ title, imageScore, imageSource }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{title}</Text>
            <Image source={imageSource} />
            <Text>Score for image: {imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ImageDetail;
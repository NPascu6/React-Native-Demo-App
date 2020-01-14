import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ImageDetail = props => {
    return (
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Image source={props.imageSource} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ImageDetail;
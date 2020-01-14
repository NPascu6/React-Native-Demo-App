import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageScreen;
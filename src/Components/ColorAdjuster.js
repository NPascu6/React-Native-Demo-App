import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorAdjuster = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={styles.textStyle}>{color}</Text>
            <Button onPress={() => onIncrease()} title={`increase ${color}`} />
            <Button onPress={() => onDecrease()} title={`decrease ${color}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default ColorAdjuster;
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.boxStyle}>
            <Text style={styles.textOneStye}>Box 1</Text>
            <Text style={styles.textTwoStye}>Box 2</Text>
            <Text style={styles.textThreeStye}>Box 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textOneStye: {
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    textTwoStye: {
        borderWidth: 3,
        borderColor: 'black',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    textThreeStye: {
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: "flex-start",
        height: 50,
        width: 50,
        backgroundColor: 'blue'
    },
    boxStyle: {
        borderColor: 'yellow',
        borderWidth: 3,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default BoxScreen;
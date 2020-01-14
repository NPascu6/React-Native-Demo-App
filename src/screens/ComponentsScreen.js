import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const texts = {
        firstText: 'My name is: ',
        secondText: 'Getting started with React Native!',
        name: 'Norbi'
    }

    return (
        <View>
            <Text style={styles.textStyle}>{texts.secondText}</Text>
            <Text style={styles.subHeaderStyle}>{texts.firstText}{texts.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
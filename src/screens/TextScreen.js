import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('Initial Name...');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Text>My name is : {name}</Text>
            <Text>Enter password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            {
                password.length < 4 ?
                    <Text>Password must be 4 chars at least</Text> :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;
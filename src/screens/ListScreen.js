import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {
            name: 'name 1',
            age: 1
        },
        {
            name: 'name 2',
            age: 2
        },
        {
            name: 'name 3',
            age: 3
        },
        {
            name: 'name 4',
            age: 4
        },
        {
            name: 'name 5',
            age: 5
        },
        {
            name: 'name 6',
            age: 6
        },
        {
            name: 'name 7',
            age: 7
        },
        {
            name: 'name 8',
            age: 8
        }
    ];

    return (
        <FlatList
            keyExtractor={(listItem) => listItem.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name} - Age: {item.age}</Text>
            }}
        />
    )
};

const style = StyleSheet.create({
    textStyle: {
        marginTop: 5
    }
})

export default ListScreen;

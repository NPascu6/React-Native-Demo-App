import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button title="Go to Components Demo" onPress={() => navigation.navigate('Components')} />
      <Button title="Go to List Demo" onPress={() => navigation.navigate('List')} />
      <Button title="Go To Image Demo" onPress={() => navigation.navigate('Image')} />
      <Button title="Go To Counter Demo" onPress={() => navigation.navigate('Counter')} />
      <Button title="Go To Color Demo" onPress={() => navigation.navigate('Color')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
})

export default HomeScreen;

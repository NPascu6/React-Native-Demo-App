import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button title="Go to Basic Components Demo" onPress={() => navigation.navigate('Components')} />
      <Button title="Go to Item List Demo" onPress={() => navigation.navigate('List')} />
      <Button title="Go To Image List Demo" onPress={() => navigation.navigate('Image')} />
      <Button title="Go To Counter Demo" onPress={() => navigation.navigate('Counter')} />
      <Button title="Go To Color Generator Demo" onPress={() => navigation.navigate('Color')} />
      <Button title="Go To Square Color Generator Demo" onPress={() => navigation.navigate('Square')} />
      <Button title="Go To Text Screen Demo" onPress={() => navigation.navigate('Text')} />
      <Button title="Go To Box Screen Demo" onPress={() => navigation.navigate('Box')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginBottom: 20
  }
})

export default HomeScreen;

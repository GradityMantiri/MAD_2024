import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TextInput } from 'react-native';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Basic Components in RN
        </Text>
        <View style={styles.boxContainer}>
          <View style={[styles.box, { backgroundColor: 'blue' }]} />
          <View style={[styles.box, { backgroundColor: 'white' }]} />
          <View style={[styles.box, { backgroundColor: 'red' }]} />
        </View>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/en7eEJezwNY/maxresdefault.jpg' }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="useless placeholder.."
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
  textInput: {
    width: '73%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default App;

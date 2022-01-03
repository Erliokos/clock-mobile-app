import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native'

const InputT = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder = 'Enter text'></TextInput>
    </View>
  );
};

export default InputT;

const styles = StyleSheet.create({
  input:{
    backgroundColor: "rgb(40,40,40)",
    color: "white",
    width: 300,
    height: 50,
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10
  }
})

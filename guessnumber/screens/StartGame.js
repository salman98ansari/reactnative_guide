import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen</Text>
      <View style={styles.inputcontainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttoncontainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputcontainer: {},
  buttoncontainer: {},
});

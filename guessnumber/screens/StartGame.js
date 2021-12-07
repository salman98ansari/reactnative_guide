import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const StartGame = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Thee Game Screen</Text>
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
    padding: 15,
    alignItems: "center",
  },
  title: { fontSize: 18, marginVertical: 10 },
  inputcontainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

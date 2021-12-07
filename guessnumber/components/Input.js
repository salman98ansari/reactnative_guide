import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.textinput, ...props.style }} />
  );
};

export default Input;

const styles = StyleSheet.create({
  textinput: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginVertical: 10,
  },
});

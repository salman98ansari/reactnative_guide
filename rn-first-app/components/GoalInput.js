import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [entergoal, setEntergoal] = useState("");

  const inputhandler = (enteredtext) => {
    setEntergoal(enteredtext);
  };
  return (
    <Modal visible={props.addmode} animationType="slide">
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Add Goals"
          style={styles.textinput}
          onChangeText={inputhandler}
          value={entergoal}
        />
        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={props.onAddGoal.bind(this, entergoal, setEntergoal)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "80%",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
    marginTop: 20,
  },
  button: {
    width: "40%",
  },
});

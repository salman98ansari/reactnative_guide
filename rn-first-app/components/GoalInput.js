import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [entergoal, setEntergoal] = useState("");

  const inputhandler = (enteredtext) => {
    setEntergoal(enteredtext);
  };
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        placeholder="Add Goals"
        style={styles.textinput}
        onChangeText={inputhandler}
        value={entergoal}
      />
      <View style={{ padding: 10 }}>
        <Button
          title="ADD"
          onPress={props.onAddGoal.bind(this, entergoal, setEntergoal)}
        />
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textinput: {
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "80%",
  },
});

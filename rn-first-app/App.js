import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [entergoal, setEntergoal] = useState("");
  const [courcegoal, setCourcegoal] = useState([]);
  const inputhandler = (enteredtext) => {
    setEntergoal(enteredtext);
  };
  const addGoalHandler = () => {
    // setCourcegoal((currentGoals) => [...currentGoals, entergoal]);
    if (entergoal !== "") {
      setCourcegoal([...courcegoal, entergoal]);
      // setEntergoal("");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Add Goals"
          style={styles.textinput}
          onChangeText={inputhandler}
          value={entergoal}
        />
        <View style={{ padding: 10 }}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {courcegoal.map((goal, index) => (
          <View key={index} style={styles.listitem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listitem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

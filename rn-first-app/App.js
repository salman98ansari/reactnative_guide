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
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courcegoal, setCourcegoal] = useState([]);
  const [addmode, setAddmode] = useState(false);

  const addGoalHandler = (goalTitle, setEntergoal) => {
    // setCourcegoal((currentGoals) => [...currentGoals, entergoal]);
    if (goalTitle !== "") {
      setCourcegoal([
        ...courcegoal,
        {
          id: Math.random().toString(),
          value: goalTitle,
        },
      ]);
    }
    setEntergoal("");
    setAddmode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourcegoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelgoal = () => {
    setAddmode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goals" onPress={() => setAddmode(true)} />
      <GoalInput
        addmode={addmode}
        onAddGoal={addGoalHandler}
        onCancel={cancelgoal}
      />
      <FlatList
        data={courcegoal}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

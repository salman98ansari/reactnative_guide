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
  };

  const removeGoalHandler = (goalId) => {
    setCourcegoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {courcegoal.map((goal, index) => (
          <View key={index} style={styles.listitem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
      <GoalInput onAddGoal={addGoalHandler} />
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

import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, props.userChoice)
  );

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie", "This is Wronggg", [
        { text: "Story", style: "cancel" },
      ]);
      return;
    }
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttoncontainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="Greater"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

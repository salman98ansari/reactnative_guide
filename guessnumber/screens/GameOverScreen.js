import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number Of Roundss {props.roundsNumber}</Text>
      <Text>Number Was {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

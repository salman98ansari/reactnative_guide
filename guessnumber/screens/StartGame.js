import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import colors from "../constants/colors.js";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer.js";
import MainButton from "../components/MainButton.js";

const StartGame = ({ onstartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "hello", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
    Keyboard.dismiss();
  };

  // we can use JSX this way
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => {
            onstartGame(selectedNumber);
          }}
        >
          Start Game
        </MainButton>
        {/* <Button
          title="Start Game"
          onPress={() => {
            onstartGame(selectedNumber);
          }}
        /> */}
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Thee Game Screen</Text>
        <Card style={styles.inputcontainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.textinput}
            keyboardType="numeric"
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttoncontainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={() => confirmInputHandler()}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    // fontFamily: "open-sans-bold"
  },
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
  button: {
    width: 100,
  },
  textinput: {
    width: 60,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

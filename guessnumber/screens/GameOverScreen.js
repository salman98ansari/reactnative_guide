import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/05/23233000/Summit-Everest-MingmaG.jpg",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {/* <Text>Number Of Roundss {props.roundsNumber}</Text>
      <Text>Number Was {props.userNumber}</Text> */}
      <View style={styles.textcontainer}>
        <Text style={styles.resulttext}>
          Your Phone needed
          <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </Text>
      </View>
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
  imagecontainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: colors.primary,
    fontWeight: "bold",
  },
  textcontainer: {
    marginHorizontal: 20,
  },
  resulttext: {
    textAlign: "center",
  },
});

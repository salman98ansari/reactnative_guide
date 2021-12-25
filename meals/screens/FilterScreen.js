import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>filter Screeen</Text>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Category meal Screeen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="next"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
    </View>
  );
};

// CategoryMealScreen.navigationOptions = (navigationData) => {
//   const catId = props.navigation.getParam("categoryId");

//   const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
//   return {
//     headerTitle: selectedCategory.title,
//   };
// };
export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

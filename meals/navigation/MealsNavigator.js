import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/colors";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "",
    },
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "",
    },
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);

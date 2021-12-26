import { Platform } from "react-native";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButto from "../components/HeaderButton";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        // headerRight: (
        //   <HeaderButtons headerButtonComponent={HeaderButto}>
        //     <Item
        //       title="Favourite"
        //       iconName="ios-star"
        //       onPress={() => {
        //         console.log("addddded");
        //       }}
        //     />
        //   </HeaderButtons>
        // ),
        headerRight: (
          <View style={{ marginHorizontal: 25 }}>
            <Text>S</Text>
          </View>
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : "",
    },
  }
);

export default createAppContainer(MealsNavigator);

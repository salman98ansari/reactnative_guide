import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";

const HeaderButto = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primaryColor}
    />
  );
};

export default HeaderButto;

const styles = StyleSheet.create({});

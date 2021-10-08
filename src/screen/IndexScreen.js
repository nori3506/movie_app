import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MoviesContainer from "../containers/MoviesContainer";
const Stack = createNativeStackNavigator();

const Indexscreen = ({ navigation }) => {
  console.log(navigation);

  return <MoviesContainer navigation={navigation} />;
};

export default Indexscreen;

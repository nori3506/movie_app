import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MoviesContainer from "../containers/MoviesContainer";

const Stack = createNativeStackNavigator();

const Indexscreen = ({ navigation }) => {
  return <MoviesContainer navigation={navigation} />;
};

export default Indexscreen;

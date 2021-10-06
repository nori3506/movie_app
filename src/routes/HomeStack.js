import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import IndexScreen from "../screen/IndexScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Indexscreen from "../screen/IndexScreen";
import Searchscreen from "../screen/SearchScreen";
import Tvshowscreen from "../screen/TvshowScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Index"
          component={IndexScreen}
          options={{
            title: "Movies App",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Search"
          component={Searchscreen}
          options={{
            title: "Search Results",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        ></Tab.Screen>
        <Tab.Screen
          name="Tv"
          component={Tvshowscreen}
          options={{
            title: "TV Shows",
            headerStyle: {
              backgroundColor: "#2c3e50",
            },
            headerTitleStyle: {
              color: "#fff",
            },
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

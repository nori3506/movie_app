import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import HomeStack from "./src/routes/HomeStack.js";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import IndexScreen from "./src/screen/IndexScreen.js";
import SearchScreen from "./src/screen/SearchScreen.js";
import Tvshowscreen from "./src/screen/TvshowScreen";
import SearchStack from "./src/routes/SearchStack";
import TvshowStack from "./src/routes/TvshowStack";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Index"
            component={HomeStack}
            options={{
              title: "Movies",
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
            component={SearchStack}
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
            component={TvshowStack}
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
    </NativeBaseProvider>
  );
}

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
import Tabs from "./src/routes/Tabs";
import Showscreen from "./src/screen/ShowScreen.js";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Show"
            component={Showscreen}
            options={({ route }) => ({
              title: route.params.title,
              headerBackTitle: "Back to List",
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();
import Tabs from "./src/routes/Tabs";
import Showscreen from "./src/screen/ShowScreen.js";
import Header from "./src/Header";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Header />
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

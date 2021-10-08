import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import IndexScreen from "../screen/IndexScreen";
import SearchScreen from "../screen/SearchScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

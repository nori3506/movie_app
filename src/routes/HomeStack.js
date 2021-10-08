import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import IndexScreen from "../screen/IndexScreen";
import ShowScreen from "../screen/ShowScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  );
}

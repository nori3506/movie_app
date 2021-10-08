import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import IndexScreen from "../screen/IndexScreen";
import SearchScreen from "../screen/SearchScreen";
import Tvshowscreen from "../screen/TvshowScreen";

const Stack = createNativeStackNavigator();

const Tvshowstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={Tvshowscreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Tvshowstack;

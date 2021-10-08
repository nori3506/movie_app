import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import HomeStack from "./HomeStack";
import SearchStack from "./SearchStack";
import Tvshowstack from "./TvshowStack";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
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
        component={Tvshowstack}
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
  );
};

export default Tabs;

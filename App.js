import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/Header";
import { NativeBaseProvider } from "native-base";
import HomeStack from "./src/routes/HomeStack.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <HomeStack />
    </NativeBaseProvider>
    // <View>
    //   <Header />
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    //   </View>
    // </View>
  );
}

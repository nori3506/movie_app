import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Movies App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 50,
    backgroundColor: "#00f",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

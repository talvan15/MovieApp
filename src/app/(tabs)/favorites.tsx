import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
  return (

      <View style={style.container}>
        <Text> Favorite page </Text>
      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242A32",
    alignItems: "center",
    justifyContent: "center",
  },
});

import {View, Text, StyleSheet} from "react-native";
import React from "react";

export default function Search() {
    return (
        
        <View style={style.container}>
            <Text>Search Screen</Text>
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

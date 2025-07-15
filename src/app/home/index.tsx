import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242A32"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center"
  }
});

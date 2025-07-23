import { View, TextInput, StyleSheet } from "react-native";  
import { MaterialIcons} from "@expo/vector-icons" 

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar Filmes"
        style={ styles.textInput }
        placeholderTextColor={"#fff" }
      />
      <MaterialIcons name="search" color="#fff" size={24}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#616161',
    padding: 10,
    borderRadius: 18,
    width: 356,
    height: 50,
  },
  textInput: {
    height: 40,
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1,
  }

});
import { View, TextInput } from "react-native";  
import {} from "@expo/vector-icons" 

export const SearchBar = () => {
  return (
    <View style={{ padding: 10, backgroundColor: '#fff', borderRadius: 5 }}>
      <TextInput
        placeholder="Search..."
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      />
    </View>
  );
}
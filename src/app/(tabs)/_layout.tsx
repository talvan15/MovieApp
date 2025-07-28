import { Tabs } from "expo-router";
import { MaterialIcons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F97D2",
        tabBarInactiveTintColor: "#fff",
        tabBarLabel: ()=> null,
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "#616161",
        },
      }}
    >
      <Tabs.Screen name="index"  options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="home" size={30} color={color} />
        )
      }}/>

      <Tabs.Screen name="search"  options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="search" size={30} color={color} />
        )}
        }/>

      <Tabs.Screen name="favorites" options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="bookmark" size={30} color={color} />
        )}
      }/>
    </Tabs>
  );
}
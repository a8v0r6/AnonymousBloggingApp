import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import BlogForm from "./app/screens/BlogForm";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./app/screens/Home";
import Post from "./app/screens/Post";

const BottomTab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color="blue" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Add Blog"
        component={BlogForm}
        options={{
          tabBarLabel: "Add Blog",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="plus-circle-outline" color="red" size={24} />
          ),
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My blogs"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Post"
        component={Post}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

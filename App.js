import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Cart from "./Cart";
import Filter from "./Filter";
import Delivery from "./Delivery";
import DrawerScreen from "./DrawerScreen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="cart" component={Cart} />
        <Tab.Screen name="Filter" component={Filter} />
        <Tab.Screen name="delivery" component={Delivery} />
        {/* <Tab.Screen options={{tabBarStyle:{display:'none'}}} name="Drawer" component={DrawerScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

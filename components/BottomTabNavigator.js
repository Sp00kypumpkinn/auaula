import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
//importe a biblioteca createBottomTabNavigator - Desafio 1
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";



//Adicione createBottomTabNavigator à variável tab - Desafio 2
const Tab = createButtomTabNavigator ()

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="trasação" componen={TransactionScreen}/>
          <Tab.Screen name="pesquisa" component ={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

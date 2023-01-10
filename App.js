import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Login from './src/Login';
import SignUp from './src/SignUp';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={Login}/>
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="SignUp" component={SignUp} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}
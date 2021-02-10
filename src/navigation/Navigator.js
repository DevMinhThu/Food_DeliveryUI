import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

const handleHeader = {
    headerShown: false
}

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={handleHeader}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

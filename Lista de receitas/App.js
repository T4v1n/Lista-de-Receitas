import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="/">
        <Stack.Screen name="/" component={HomeScreen} />
        <Stack.Screen name="Detalhes da Receita" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

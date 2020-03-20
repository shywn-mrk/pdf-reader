/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './src/screens/MainScreen/MainScreen';
import PDFDetailScreen from './src/screens/PDFDetailScreen/PDFDetailScreen';
import PDFScreen from './src/screens/PDFScreen/PDFScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={MainScreen} options={{
          title: 'PDFReader',
          headerStyle: {
            backgroundColor: '#182f3d'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
        }} />
        <Stack.Screen name='PDFDetail' component={PDFDetailScreen} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#182f3d'
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name='PDFScreen' component={PDFScreen} options={{
          title: '',
          headerStyle: {
            backgroundColor: '#182f3d'
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

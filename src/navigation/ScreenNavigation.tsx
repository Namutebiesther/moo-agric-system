import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const ScreenNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default ScreenNavigation;

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/home/Home';
import Identification from '../screens/Identification/Identification';
import Profile from '../screens/Profile/Profile';
import Community from '../screens/communty/Community';
import Weather from '../screens/weather/Weather';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'leaf' : 'leaf-sharp';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          } else if (route.name === 'Identification') {
            iconName = focused ? 'camera' : 'camera';
          } else if (route.name === 'Weather') {
            iconName = focused ? 'rainy' : 'rainy';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{tabBarLabel: 'Feed'}}
      />
      <Tab.Screen name="Weather" component={Weather} />
      <Tab.Screen name="Identification" component={Identification} />
      <Tab.Screen name="Community" component={Community} />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

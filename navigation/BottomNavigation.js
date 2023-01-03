import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import Favourites from '../screens/Favourites';
import SearchProperty from '../screens/SearchProperty';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';

import { FONTS } from '../constants';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#07B999',
            tabBarInactiveTintColor: '#F4F5F8', 
            tabBarStyle: {
                backgroundColor: '#262B2E',
                borderTopColor:'#353C41',
                height:55,          
            },
            tabBarLabelStyle:{fontFamily:FONTS.medium}
        }}
    >
        <Tab.Screen options={{
            tabBarLabel: 'Home',
            tabBarIcon:({color, size}) => (
                <Ionicons name='ios-home-outline' size={size} color={color}/>
            )
            }}
            name="HomeTab" 
            component={HomeScreen}
        />

        <Tab.Screen options={{
            tabBarLabel: 'Explore',
            tabBarIcon:({color, size}) => (
                <Ionicons name='search-outline' size={size} color={color}/>
            )
            }}
            name="SearchTab" 
            component={SearchProperty}
        />

        <Tab.Screen options={{
            tabBarLabel: 'Favorites',
            tabBarIcon:({color, size}) => (
                <Ionicons name='heart-outline' size={size} color={color}/>
            )
            }}
            name="FavoritesTab" 
            component={Favourites}
        />

        <Tab.Screen options={{
            tabBarLabel: 'Messages',
            tabBarIcon:({color, size}) => (
                <Ionicons name="md-chatbubble-ellipses-outline" size={size} color={color} />
            )
            }}
            name="MessagesTab" 
            component={Messages}
        />

        <Tab.Screen options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({color, size}) => (
                <SimpleLineIcons name="user" size={size} color={color}/>
            )
            }}
            name="ProfileTab" 
            component={Profile}
        />

    </Tab.Navigator>
  )
}

export default BottomNavigation
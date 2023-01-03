import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, Feather, MaterialCommunityIcons, Octicons, MaterialIcons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from "../constants";

import BottomNavigation from './BottomNavigation';
import HomeScreen from '../screens/HomeScreen';
import AddProperty from '../screens/AddProperty';
import SearchProperty from '../screens/SearchProperty';
import NewProjects from '../screens/NewProjects';
import Favourites from '../screens/Favourites';
import SavedSearches from '../screens/SavedSearches';
import Agents from '../screens/Agents';
import News from '../screens/News';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Terms from '../screens/Terms';
import Settings from '../screens/Settings';

import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: COLORS.primary,
                drawerInactiveTintColor: COLORS.light,
                drawerLabelStyle: {
                    marginLeft: -10,
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.font
                }
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='Home' component={BottomNavigation} options={{
                drawerLabel: 'Home',
                drawerIcon: ({ color }) => (
                    <Ionicons name='ios-home-outline' size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='AddProperty' component={AddProperty} options={{
                drawerLabel: 'Add Property',
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-plus-outline" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='NewProjects' component={NewProjects} options={{
                drawerLabel: 'New Projects',
                drawerIcon: ({ color }) => (
                    <Octicons name="project" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='SavedSearches' component={SavedSearches} options={{
                drawerLabel: 'Saved Searches',
                drawerIcon: ({ color }) => (
                    <Feather name="bookmark" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Agents' component={Agents} options={{
                drawerLabel: 'Agents',
                drawerIcon: ({ color }) => (
                    <MaterialCommunityIcons name="face-agent" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='News' component={News} options={{
                drawerLabel: 'News and Blogs',
                drawerIcon: ({ color }) => (
                    <Ionicons name="newspaper-outline" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='About' component={About} options={{
                drawerLabel: 'About us',
                drawerIcon: ({ color }) => (
                    <Feather name="info" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Contact' component={Contact} options={{
                drawerLabel: 'Contact us',
                drawerIcon: ({ color }) => (
                    <Ionicons name="md-call-outline" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Terms' component={Terms} options={{
                drawerLabel: 'Terms and Policies',
                drawerIcon: ({ color }) => (
                    <Ionicons name="document-text-outline" size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Settings' component={Settings} options={{
                drawerLabel: 'Settings',
                drawerIcon: ({ color }) => (
                    <Ionicons name="md-settings-outline" size={20} color={color} />
                )
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
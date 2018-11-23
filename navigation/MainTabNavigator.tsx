import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import HomeScreen from '../screens/RepositoriesScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-information` : 'md-information-circle'} />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-link` : 'md-link'} />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }: any) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-options` : 'md-options'} />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

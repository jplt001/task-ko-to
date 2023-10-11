// MainScreen.js
import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from './Main/DashboardScreen';
import TasksScreen from './Main/TasksScreen';
import ReportsScreen from './Main/ReportsScreen';
import ProfileScreen from './Main/ProfileScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {

    let _goBack = ()=> {};
    let _handleSearch = ()=> {};
    let _handleMore = ()=> {};
    return (
        <>
            <Appbar.Header mode='center-aligned' elevated={true}>
                {/* <Appbar.BackAction onPress={_goBack} /> */}
                <Appbar.Content title="TaskKoTo" />

                {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
                {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
            </Appbar.Header>
            <Tab.Navigator screenOptions={{ headerShown: false, }}>
                <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="dashboard" color={color} size={26} />
                    ),
                }} />
                <Tab.Screen name="Tasks" component={TasksScreen} options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="tasks" color={color} size={26} />
                    ),
                }} />
                <Tab.Screen name="Reports" 
                            component={ReportsScreen}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <FontAwesome5 name="file-invoice" color={color} size={26} />
                                ),
                            }}
                     />
                <Tab.Screen name="Profile"
                            component={ProfileScreen}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <FontAwesome5 name="user" color={color} size={26} />
                                ),
                            }}
                    />
            </Tab.Navigator>
        </>
    );
};

export default MainScreen;

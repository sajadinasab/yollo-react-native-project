import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Discover, Chat, ChatDetails, CreateStory } from 'Screens';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {
                height: 70,
                opacity: .95,
                position: "absolute"
            },
            activeTintColor: "#000",
            inactiveTintColor: "#ccc",
            size: 30
        }}>
            <Tab.Screen name="Home"
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon size={size} color={color} name="home" />
                    )
                }}
                component={Home} />
            <Tab.Screen
                name="Discover"
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon size={size} color={color} name="explore" />
                    )
                }}
                component={Discover} />
            <Tab.Screen
                name="Chat"
                options={{
                    headerShown: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Icon size={size} color={color} name="chat" />
                    )
                }}
                component={Chat} />
        </Tab.Navigator>
    )
}

export default Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Stack" component={TabScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ChatDetails" component={ChatDetails} options={{ headerShown: false }} />
                <Stack.Screen name="CreateStory" component={CreateStory} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

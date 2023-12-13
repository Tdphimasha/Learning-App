import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AboutScreen from "./components/AboutScreen";
import ProfileScreen from "./components/ProfileScreen";
import CourseScreen from './components/CourseScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import LandingScreen from './components/LandingScreen';
import HomeScreen from "./components/HomeScreen";

import Browser from './components/Browser';

import Icon from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';
import { TouchableOpacity,} from 'react-native';

    const Stack = createNativeStackNavigator();

    const StackNavigator = () =>{

    return (
        <Stack.Navigator
        screenOptions={{title: null, headerStyle: {elevation:0}}}>
          <Stack.Screen name="Land"component ={LandingScreen}
          options={{
          headerTransparent: true,
          }}/>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
        }}
        />
           <Stack.Screen name="About"component ={AboutScreen}
             options={{
              headerTransparent: true,
              }}/>
            <Stack.Screen name="Profile"component ={ProfileScreen}
              options={{
                headerTransparent: true,
                }}/>
            <Stack.Screen name="LoginScreen"component ={LoginScreen}
             options={{
              headerTransparent: true,
          }}/>
            <Stack.Screen name="RegisterScreen"component ={RegisterScreen}
              options={{
                headerTransparent: true,
                }}/>
                <Stack.Screen name="Browser"component ={Browser}
              options={{
                headerTransparent: true,
                }}/>



            <Stack.Screen
          name="CourseScreen"
          options={({navigation}) => ({
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-back-ios"
                  size={25}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Icon name="more-vert" size={25} style={{marginRight: 20}} />
            ),
          })}
          component={CourseScreen}></Stack.Screen>
            </Stack.Navigator>
    )
}
export default StackNavigator;

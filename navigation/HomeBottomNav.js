import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotosStackNav from './PhotosStackNav';
import ProfileStackNav from './ProfileStackNav';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import UserStackNav from './UserStackNav';
const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const HomeBottomNav=()=>{
    const { colors } = useTheme();
    return(
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route, navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'people-outline';
                } else if (route.name === 'Photos') {
                    iconName = focused ? 'images' : 'images-outline';
                }
                else if (route.name === 'Movies') {
                    iconName = focused ? 'play' : 'play-outline';
                }
                
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Home" component={UserStackNav} options={{headerTitleAlign:'center',headerShadowVisible:true,tabBarLabelStyle:{fontSize:14}}}  />
        <Tab.Screen name="Photos" component={PhotosStackNav} options={{tabBarLabelStyle:{fontSize:14}}} />
        <Tab.Screen name="Movies" component={ProfileStackNav} options={{tabBarLabelStyle:{fontSize:14}}}/>
      </Tab.Navigator>
    );
}
export default HomeBottomNav;
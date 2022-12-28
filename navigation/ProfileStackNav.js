import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();
const ProfileStackNav=()=>{
    return(
        <Stack.Navigator initialRouteName='Movies '>
        <Stack.Screen name="Movies " 
        component={Profile}
        options={{headerTitleAlign:'center'}} />
      </Stack.Navigator>
    );
}
export default ProfileStackNav;
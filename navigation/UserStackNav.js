import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserData from '../screens/userData';
import ViewUser from '../screens/viewUser';

const Stack = createNativeStackNavigator();
const UserStackNav=()=>{
    return(
        <Stack.Navigator initialRouteName='Home '>
        <Stack.Screen name="Home " 
        component={UserData}
        options={{headerTitleAlign:'center'}} />
        <Stack.Screen name="View User " 
        component={ViewUser}
        options={{headerTitleAlign:'center'}} />
      </Stack.Navigator>
    );
}
export default UserStackNav;
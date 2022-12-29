import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Photos from '../screens/Photos';

const Stack = createNativeStackNavigator();
const PhotosStackNav=()=>{
    return(
        <Stack.Navigator initialRouteName='Photos '>
        <Stack.Screen name="Photos " 
        component={Photos}
        options={{headerTitleAlign:'center'}} />
      </Stack.Navigator>
    );
}
export default PhotosStackNav;
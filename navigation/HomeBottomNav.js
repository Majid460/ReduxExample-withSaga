import React ,{useEffect,useState}from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PhotosStackNav from './PhotosStackNav';
import ProfileStackNav from './ProfileStackNav';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import UserStackNav from './UserStackNav';
import { useSelector } from 'react-redux';

const Tab=createBottomTabNavigator();
const HomeBottomNav=()=>{
    const {badge}=useSelector((state)=>state.user);
    const [isVisible,setVisible]=useState(false)
    const { colors } = useTheme();
    useEffect(()=>{
      if(badge.badgeCount==0)
      {
        setVisible(false)
      }
      else if(badge.badgeCount>0)
      {
        setVisible(true)
      }
    },[badge.badgeCount])
    return(
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route, navigation }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
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
            tabBarHideOnKeyboard:true
        })}
        >
        <Tab.Screen name="Home" component={UserStackNav} options={{headerTitleAlign:'center',headerShadowVisible:true,tabBarLabelStyle:{fontSize:14},tabBarBadge:(isVisible?badge.badgeCount:undefined),tabBarBadgeStyle:{backgroundColor:'green'
        ,marginStart:10,color:'white',fontSize:17,fontWeight:'500'
        }}}  />
        <Tab.Screen name="Photos" component={PhotosStackNav} options={{tabBarLabelStyle:{fontSize:14}}} />
        <Tab.Screen name="Movies" component={ProfileStackNav} options={{tabBarLabelStyle:{fontSize:14}}}/>
      </Tab.Navigator>
    );
}
export default HomeBottomNav;
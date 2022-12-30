import React,{useEffect,useState} from "react";
import {Text,View,TextInput,StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { getUserData ,setBadge} from "../../redux/reducer";
import { useInterval } from "react-interval-hook";
const UserData=({navigation})=>{
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    var number=0;
    const {badge}=useSelector((state)=>state.user)
     number=badge.badgeCount
    const [visible,setVisible]=useState(false);
    const dispatch=useDispatch();
    const onButtonPress=()=>{
        setVisible(true);
        if(name.length==0 || age==0)
        {
            alert("No empty field is required")
        }
        else if(name.length==0 && age==0)
        {
            alert("No empty field is required")
        }
        else if(name.length!=0 && age!=0)
        {  
            number=number+1
            dispatch(setBadge({badgeCount:number}))
            dispatch(getUserData({
                name:name,
                age:age
             }))
        }
    
    }
    const { stop } = useInterval(
        () => {
            if(visible==true)
            {
              setVisible(false)
            }
        },
        3000,
        {
          autoStart: true,
          immediate: false,
          selfCorrecting: false,
        }
      );
    return(
   <View style={styles.container}>
    <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate('View User ')}}>
        <Text style={styles.heading}>View User Records</Text>
    </TouchableOpacity>
    <View style={styles.t1}>
    <TextInput style={styles.textInput}
    placeholder="User Name"
    placeholderTextColor='grey'
    onChangeText={(value)=>{
    setName(value)}}
    />
    </View>
    <View style={styles.t2}>
    <TextInput style={styles.textInput}
    placeholder=" Age"
    placeholderTextColor='grey'
    onChangeText={(value)=>{
    setAge(value)}}
    />
    </View>
    <TouchableOpacity style={styles.button} onPress={()=>{onButtonPress()}} disabled={name.length==0 && age==0 || name.length==0 || age==0} >
        <Text style={styles.heading}>Save</Text>
    </TouchableOpacity>
    <View style={{flex:1,width:20,height:20,justifyContent:'space-between',alignSelf:'center',marginTop:10}}>
       <ActivityIndicator animating={visible} size="large" color="#0000ff" />
       </View>
   </View>
    );
}
export default UserData;
const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:20
    },
    textInput:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,
    },
    t1:{
     marginVertical:20
    },
    t2:{
        marginVertical:20
    },
    button:{
        backgroundColor:'pink',
        borderWidth:1,
        borderRadius:10,
        width:'30%',
        alignSelf:'center'
    },
    button1:{
        backgroundColor:'pink',
        borderWidth:1,
        borderRadius:10,
        width:'60%',
        alignSelf:'center',
        marginBottom:30
    },
    heading:{
        fontSize:20,
        fontWeight:'600',
        paddingVertical:15,
        alignSelf:'center',
        color:'black'
    }
});
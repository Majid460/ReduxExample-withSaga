import React,{useEffect,useState} from "react";
import {Text,View,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { getUserData } from "../../redux/reducer";
const UserData=({navigation})=>{
    const [name,setName]=useState("");
    const [age,setAge]=useState(0);
    const dispatch=useDispatch();
    const onButtonPress=()=>{
     dispatch(getUserData({
        name:name,
        age:age
     }))
    }
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
    <TouchableOpacity style={styles.button} onPress={()=>{onButtonPress()}}>
        <Text style={styles.heading}>Save</Text>
    </TouchableOpacity>
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
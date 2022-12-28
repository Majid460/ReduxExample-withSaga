import React ,{useState,useEffect}from "react";
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { setUserData } from "../redux/reducer";
import { Majid,Ali } from "../raw/data";
import { ActionTypes } from "@redux-devtools/core";
const Home=({navigation})=>{
     const dispatch=useDispatch();
    const {userData}=useSelector((state)=>state.user)
    const [userName,setName]=useState("");
    const [click,setClick]=useState(false);
  useEffect(()=>{
    if(userName=="Majid"){
        dispatch(setUserData(userName));
        console.log("User Name:"+ userData)
    }
       
  },[userName])
  
    return(
        
   <View style={styles.container}>
    <Text style={styles.buttonText}>Please select one category</Text>
    <TouchableOpacity style={styles.clicked} onPress={()=>{navigation.navigate('Photos')}}>
        <Text style={styles.heading}>Photos</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.notClicked} onPress={()=>{navigation.navigate('Profile')}}>
        <Text style={styles.heading}>Movies</Text>
    </TouchableOpacity>
    </View>
    /* <Text style={styles.heading}>User</Text>
     <TextInput
     style={styles.textInput}
     placeholder="User Name"
     placeholderTextColor='grey'
     onChangeText={(value)=>{
     setName(value);
     }}
    
     />
     <Users name={userName}/> */
  
      /* <View style={styles.container2}>
      <Text style={styles.heading}>Enter User Items</Text>
      <View style={{width:'100%',flexDirection:'row'}}>
      <TouchableOpacity
       style={click?styles.clicked:styles.notClicked}
      >
        <Text style={styles.heading}>Majid</Text>
      </TouchableOpacity>
      <TouchableOpacity style={click?styles.clicked:styles.notClicked}>
      <Text style={styles.heading}>Ali</Text>
      </TouchableOpacity>
      </View>
     
      </View> */

    );
}
export default Home;
const Users=(userName)=>{
 return(
   <View style={styles.container}>
   {userName.name=="Majid" && ( Majid.map((item,key)=>(
           <Text style={styles.heading} key={key}>{item}</Text>
    ))
    )}
    {
        userName.name=="Ali"&& ( Ali.map((item,key)=>(
            <Text style={styles.heading} key={key}>{item.name}</Text>
     ))
     )
    }
   </View>
    
 )
}
const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:50
    },
    container2:{
        flex:1,
        flexDirection:'column',
        marginTop:10,
        backgroundColor:'white',
        justifyContent:"center",
        alignContent:'center',
    
    },
    heading:{
        fontSize:20,
        fontWeight:'600',
        paddingVertical:30,
        alignSelf:'center',
        color:'black'
    },
    textInput:{
        borderWidth:1,
        borderRadius:10,
       paddingHorizontal:10,
       marginHorizontal:10,
    },
    buttonText:{
        fontSize:17,
        paddingHorizontal:10,
        paddingVertical:10,
        color:'grey',
        marginTop:10,
        marginBottom:20
    },
    notClicked:{
        backgroundColor:'pink',
        borderWidth:1,
        borderRadius:10,
        width:'40%',
        marginTop:40   
    },
    clicked:{
        backgroundColor:'pink',
        borderWidth:1,
        borderRadius:10,
        width:'40%'
    }
    }
);
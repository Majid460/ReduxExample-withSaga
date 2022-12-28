import React,{useState,useEffect,useContext,createContext} from "react";
import {Text,View,StyleSheet,FlatList} from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { getMovie } from "../redux/reducer";
const name=createContext("default");
const Profile=()=>{
    const [Name,setName]=useState("Movies");
    const dispatch=useDispatch();
      
    useEffect(() => {
       dispatch(getMovie({}));
       
    }, []);
    return(
     <View style={styles.mainCon}>
        <name.Provider value={Name}>
        <Person/>
        </name.Provider>
     
     </View>
    );
}
export default Profile;
const Person =()=>{
    const Name=useContext(name);
    const {movies}=useSelector((state)=>state.user);
    return(
        <View >
         <FlatList
       data={movies}
       keyExtractor={({ id }, index) => id}
       renderItem={({ item }) => (
            <View style={styles.item1}>
                <View style={styles.viewA}>
                    <View style={styles.A}>
                       <Text style={styles.item2}>Movie Name </Text>
                    </View>
                    <View style={styles.B}>
                    <Text style={styles.item2}>Release Year  </Text>
                    </View>
                    
                </View>
                <View style={styles.viewA}>
                    <View style={styles.A}>
                       <Text style={styles.item}>{item.title} </Text>
                    </View>
                    <View style={styles.B}>
                    <Text style={styles.item}>{item.releaseYear}  </Text>
                    </View>
                    
                </View>
             
            </View>
     
          )}

       />
        </View>
    )
}
const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:10,
        backgroundColor:'pink',
        alignItems:'center',
        justifyContent:'center'
    
    
    },
    heading:{
        fontSize:30,
        marginBottom:20,
        fontWeight:'600',
        alignSelf:'center',
        color:'black'
    },
    view:{
        alignSelf:'center',
        justifyContent: "center",
        alignItems: "center",
      },
      text:
      {   color:'black',
          fontSize:25,
          marginRight:5,
      },
     
      item1:
      {
        flex:1,
      flexDirection:'column',
       borderColor:'#534A4A',
       borderRadius:10,
       paddingHorizontal:10,
       marginEnd:7,
       paddingVertical:30,
       borderWidth:2,
       marginBottom:10,
       marginTop:10
      },
      item2:
      {
        flex:1,
       flexDirection:'row',
       borderColor:'white',
       borderRadius:10,
       paddingHorizontal:20,
       color:'#534A4A',
       fontSize:17,
     
      
      },
      item:
      {
        flex:1,
       flexDirection:'row',
       borderColor:'white',
       borderRadius:10,
       paddingHorizontal:20,
       color:'#534A4A',
       fontSize:22,
       fontWeight:'bold'
      
      },
      mainCon:{
        flex:1,
        paddingVertical:30,
        backgroundColor:'white',
        paddingStart:10,
        paddingEnd:10,
         },
     heading:{
            fontSize:30,
            fontWeight:'700',
            textAlign:'center',
            marginTop:10,
            
       
       },
       viewA:{
        flex:1,
       flexDirection:'row',
       },
       A:{
        flex:2,
       },
       B:
       {
        flex:1,
       }
}
);

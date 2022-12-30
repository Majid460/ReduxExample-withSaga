import React,{useState,useEffect,useCallback} from 'react';
import {Text,View,TouchableOpacity,TextInput,StyleSheet,FlatList,ActivityIndicator, RefreshControl} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { getDelete, getUserRecords,setBadge } from '../../redux/reducer';
import Icon from 'react-native-vector-icons/Ionicons';
const ViewUser=({navigation})=>{
  const [data,setData]=useState(null)  
  const [visible,setVisible]=useState(false);
  const [isRefreshing,setRefreshing]=useState(false)
  const [badgeCount,setBadgeC]=useState(0)
 const dispatch=useDispatch();
 const {userRecords,badge}=useSelector((state)=>state.user);
 useEffect(()=>{
        dispatch(getUserRecords({}))
       
        if(isRefreshing==true)
        {
          wait(3000).then(()=>{
            setRefreshing(false)
          })
        }
 },[isRefreshing]);
 useEffect(()=>{
  const unsubscribe = navigation.addListener('focus', () => {
    console.log(badge.badgeCount)
    dispatch(setBadge({badgeCount:0}))
  });
  return unsubscribe;
  
 },[])
 const wait = (timeout) => { 
  return new Promise(resolve => setTimeout(resolve, timeout));
}
 const onRefresh = useCallback(() => {
  setRefreshing(true);
  dispatch(getUserRecords({}))
  wait(3000).then(() => {
    setRefreshing(false)});
   }, []);
     const search=()=>{
            dispatch(getUserRecords({data:data}))
     }
     const deleteBy=()=>
     {  setRefreshing(true);
        dispatch(getDelete({data:data}))
     }
    return(
      <View style={styles.container} >
        <View style={styles.searchT}>
        <TextInput style={styles.search}
        placeholder="Search User"
        placeholderTextColor='grey'
        onChangeText={(value)=>{
            if(value.length===0)
            {
                dispatch(getUserRecords({}))
            }
            setData(value)}}
           
        />
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{search()}}>
      <Icon name="search-outline" size={25} color={'#2382DB'}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBtn} onPress={()=>{deleteBy()}}>
      <Icon name="trash-outline" size={25} color={'#2382DB'}/>
      </TouchableOpacity>
      </View>
       <FlatList
       data={userRecords}
       keyExtractor={(item, index) => {
        return index.toString();
      }}
       refreshing={isRefreshing}
       onRefresh={onRefresh}
       onScroll={()=>{
        setVisible(true)
       }}
       onMomentumScrollEnd={()=>{
            setVisible(false)
       }
    }
       renderItem={({ item ,index}) => (
            <View style={styles.item1} key={index}>
                <View style={styles.viewA}>
                    <View style={styles.A}>
                       <Text  style={styles.item2}> Name </Text>
                    </View>
                    <View style={styles.B}>
                    <Text  style={[styles.item2]}> Age </Text>
                </View>
                    
                </View>
                <View style={styles.viewA}>
                    <View style={styles.AB}>
                       <Text  style={styles.item}>{item.name} </Text>
                    </View>
                    <View style={styles.B}>
                    <Text style={styles.item}>{item.age}  </Text>
                    </View>
                    
                </View>
             
            </View>
     
          )}

       />
         {/* <View style={{flex:1,width:20,height:20,justifyContent:'flex-end',alignSelf:'center',marginBottom:10}}>
       <ActivityIndicator animating={visible} size="large" color="#0000ff" />
       </View> */}
      </View>
    );
}
export default ViewUser;
const styles=StyleSheet.create(
    {
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:20,
        paddingHorizontal:20
    },
    textInput:{
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,
    },
    searchT:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:10
    },
    search:{
    flex:6,
    },
    searchBtn:{
        flex:1,
      width:30,
      paddingStart:10,
      height:30 ,
      alignSelf:'center',
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
    heading:{
        fontSize:20,
        fontWeight:'600',
        paddingVertical:15,
        alignSelf:'center',
        color:'black'
    },
    item1:
    {
      flex:1,
    flexDirection:'column',
     borderColor:'#534A4A',
     borderRadius:10,
     paddingHorizontal:10,
     marginEnd:7,
     paddingVertical:10,
     borderWidth:2,
     marginBottom:10,
     marginTop:10
    },
    viewA:{
        flex:1,
       flexDirection:'row',
       },
       AB:{
        flex:2,
        flexDirection:'column'
       },
       A:{
        flex:2,
       },
       B:
       {
        flex:1,
       },
       image:{
        width:100,
        height:100,
        borderWidth:2,
        borderColor:'#d35647',
        resizeMode:'contain',
       },
       PName:{
        paddingHorizontal:10,
       },
       itName:{
        flex:1,
       flexDirection:'row',
       borderColor:'white',
       borderRadius:10,
       paddingHorizontal:10,
       color:'#534A4A',
       fontSize:17,
       },
       item2:
      {
        flex:1,
       flexDirection:'row',
       borderColor:'white',
       borderRadius:10,
       paddingHorizontal:15,
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
       marginTop:5,
       fontWeight:'bold'
      
      },
});
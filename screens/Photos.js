import React ,{useEffect,useState}from "react";
import {Text,View,StyleSheet,FlatList,Image,ActivityIndicator} from 'react-native';
import { getPhotos } from "../redux/reducer";
import { useDispatch,useSelector } from "react-redux";
const Photos=()=>{
    const [visible,setVisible]=useState(false);
    const dispatch=useDispatch();
    const {photos}=useSelector((state)=>state.user);
    useEffect(()=>{
       dispatch(getPhotos({}))
    },[])
    return(
       
     <View style={styles.mainCon}>
        <FlatList
       data={photos}
       keyExtractor={({ id }, index) =>{return index.toString()}}
       onScroll={()=>{
        setVisible(true)
       }}
       onMomentumScrollEnd={()=>{
            console.log("Scroll end")
            setVisible(false)
       }
    }
       renderItem={({ item ,index}) => (
            <View style={styles.item1}>
                <View style={styles.viewA}>
                    <View style={styles.A}>
                       <Text style={styles.item2}>Photo Id </Text>
                    </View>
                    <View style={styles.B}>
                    <Text style={[styles.item2,{marginStart:15}]}>Photo </Text>
                </View>
                    
                </View>
                <View style={styles.viewA}>
                    <View style={styles.AB}>
                       <Text style={styles.item}>{item.id} </Text>
                       <Text style={styles.itName}>Photo Name </Text>
                       <Text style={styles.PName}>{item.title}</Text>
                    </View>
                    <View style={styles.B}>
                   <Image
                     source={{uri:item.url}}
                     key={index}
                     style={styles.image}
                   />
                    </View>
                    
                </View>
             
            </View>
     
          )}

       />
       <View style={{flex:1,width:20,height:20,justifyContent:'flex-end',alignSelf:'center',marginBottom:10}}>
       <ActivityIndicator animating={visible} size="large" color="#0000ff" />
       </View>
     </View>
    );
}
export default Photos;
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
       paddingHorizontal:10,
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
      mainCon:{
        flex:1,
        paddingVertical:20,
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
       }
}
);

import React from "react";
import {View,Text,StyleSheet,Pressable} from 'react-native'
import { colors } from "../../res/colors";
import { FontAwesome } from '@expo/vector-icons';
import { navigate } from "../refs/NavRefs";

export default TrackListComponent=(props)=>
{
    const onClick=()=>
    {
        navigate('TackViewScreen',{
            trackId:props.trackId
        })
    }
   return(
    <Pressable onPress={()=> onClick()}>
    <View style={styles.MainContainer}>
        <Text style={styles.TitleTextLayout}>{props.textTitle}</Text>
        <FontAwesome  name="arrow-circle-o-right" size={24} color="white" />
    </View>
    </Pressable>
   )
}

const styles=StyleSheet.create({
    MainContainer:{
        padding:10,
        backgroundColor:'orange',
        marginVertical:5,
        borderWidth:2,
        borderColor:'white',
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    TitleTextLayout:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginHorizontal:10
    }
})


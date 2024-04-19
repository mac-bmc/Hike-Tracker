import React,{useContext}from 'react'
import { Text ,View,StatusBar,StyleSheet} from 'react-native'
import{Button} from 'react-native-elements'
import { Context as AuthContext } from '../../context-providers/AuthContextProvider'
import { MaterialIcons } from '@expo/vector-icons';
import { ControlButton } from '../../components/ControlButton';
export default function AccountScreen() {
  const {boundActions} = useContext(AuthContext)
  return (
   <View style={styles.MainAccountContainer}>
    <ControlButton title='SignOut' callback={boundActions.UserSignOut}/>
   </View>
  )
}
const styles = StyleSheet.create({
  MainAccountContainer:{
    marginTop:StatusBar.currentHeight,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

AccountScreen.navigationOptions = () => {
  return {
    title:"Accounts",
    tabBarIcon: () => (
      <MaterialIcons name="account-box" size={24} color="white" />
    ),
    
  };
};
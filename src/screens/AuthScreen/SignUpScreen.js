import React from 'react'
import { Text,Pressable} from 'react-native'

export default function SignUpScreen({navigation}) {
  return (
    <Pressable onPress={()=>navigation.navigate('SignIn')}><Text style={{fontSize:22}}>SignUpScreen</Text></Pressable>
  )
    
}

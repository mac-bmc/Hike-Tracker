import React from 'react'
import{Button} from '@rneui/themed'
import { useState, useContext ,useEffect } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from '@rneui/themed'
import CustomTextInput from '../../components/CustomTextInputComponent'
import { colors } from '../../../res/colors'
import CustomButton from '../../components/CustomButton'
import { Context as AuthContext } from '../../context-providers/AuthContextProvider'

export default function SignUpScreen({ navigation }) {

  const [emailCredential, setEmail] = useState('')
  const [pswdCredential, setPswd] = useState('')
  const {state, boundActions} = useContext(AuthContext)
  return (

   /*  <SafeAreaView style={styles.SafeAreaContainer}> */
      <LinearGradient
        colors={['#c0392b', '#f1c40f', '#8e44ad']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.SafeAreaContainer}
      >
      <View style={styles.SignUpContainer}>
        <View style={styles.NavigationContainer}>
          <Text style={styles.NavigationTextLayout}>Signup</Text>
          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={{
              fontSize: 20,
              color: 'black'
            }}>Signin</Text>
          </Pressable>
        </View>
        <CustomTextInput placeholder="Email" value={emailCredential} onChange={setEmail} />
        <CustomTextInput placeholder="Password" value={pswdCredential} onChange={setPswd} secure={true} errorMsg={state.errorMsg}/>
        {state.errorMsg && <Text style={styles.ErrorMsgText}>{state.errorMsg}</Text>}
       <CustomButton title="Signup" backgroundColor={colors.buttonColor} onClick={boundActions.UserSignUp} email={emailCredential} password={pswdCredential} loading={state.loadingState}/> 
      </View>
      </LinearGradient>
   /*  </SafeAreaView> */

  )

}

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  SafeAreaContainer: {
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    flex: 1
  },
  SignUpContainer: {
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderColor:'white',
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white'
  },
  NavigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30
  },
  NavigationTextLayout: {
    fontSize: 20,
    color: colors.textNavcolor
  },
  ErrorMsgText:{
    fontSize:16,
    color:'red'
  }
})

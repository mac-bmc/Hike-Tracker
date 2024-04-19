import React from 'react'
import { useState, useContext } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from '@rneui/themed'
import CustomTextInput from '../../components/CustomTextInputComponent'
import { colors } from '../../../res/colors'
import CustomButton from '../../components/CustomButton'
import { Context as AuthContext } from '../../context-providers/AuthContextProvider'

export default function SignInScreen({ navigation }) {

  const [emailCredential, setEmail] = useState('')
  const [pswdCredential, setPswd] = useState('')
  const {state, boundActions} = useContext(AuthContext)
  return (


    <LinearGradient
      colors={['#c0392b', '#f1c40f', '#8e44ad']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={styles.SafeAreaContainer}
    >
      <View style={styles.SignUpContainer}>
        <View style={styles.NavigationContainer}>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{
              fontSize: 20,
              color: 'black'
            }}>Signup</Text>
          </Pressable>
          <Text style={styles.NavigationTextLayout}>Signin</Text>
        </View>
        <CustomTextInput placeholder="Email" value={emailCredential} onChange={setEmail} />
        <CustomTextInput placeholder="Password" value={pswdCredential} onChange={setPswd} secure={true} />
        {state.errorMsg && <Text style={styles.ErrorMsgText}>{state.errorMsg}</Text>}
        <CustomButton title="Signin" backgroundColor={colors.buttonColor} onClick={boundActions.UserSignIn} email={emailCredential} password={pswdCredential} loading={state.loadingState} />
      </View>
    </LinearGradient>


  )

}

SignInScreen.navigationOptions = () => {
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
    borderColor: 'white',
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

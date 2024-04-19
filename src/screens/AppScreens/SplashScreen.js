import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { useContext, useEffect } from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { colors } from '../../../res/colors'
import { Context as AuthContext } from '../../context-providers/AuthContextProvider'


export default Splash = ({ navigation }) => {
    const { state, boundActions } = useContext(AuthContext)
    useEffect(() => {
        setTimeout(() => {
            boundActions.CurentUserToken()
          }, 3000);
    }, []);
    if (state.token) {
        navigation.navigate('appFlow')
    }
    return (
        <LinearGradient style={styles.MainSplashContainer}
            colors={['#c0392b', '#f1c40f', '#8e44ad']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}>
            <Text style={styles.TitleTextLayout}>Hiker</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    MainSplashContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    TitleTextLayout: {
        fontSize: 40,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        color: colors.white
    }
})
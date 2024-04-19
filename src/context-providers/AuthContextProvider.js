import ContextCreator from "./ContextCreator";
import AxiosInstance from "../api/AxiosInstance";
import { navigate } from "../refs/NavRefs";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthReducer = (state, actions) => {
    switch (actions.type) {
        case 'error_state':
            {
                return { ...state, errorMsg: actions.payload }
            }
        case 'loading_state':
            {
                return { ...state, loadingState: actions.payload }
            }
        case 'auth_success':
            {
                return { errorMsg: '', token: actions.payload, loadingState: false }
            }
        case 'update_token':
            {
                return { ...state, token: actions.payload }
            }
        case 'signout':
            {
                return { token: null }

            }
        default:
            return state
    }
}

const UserSignUp = (dispatch) => {

    return async (email, password) => {
        dispatch({ type: 'loading_state', payload: true });
        console.log('called');
        try {
            const response = await AxiosInstance.post('/signup', {
                "email": email,
                "password": password
            });
            dispatch({ type: 'loading_state', payload: false });
            console.log(`response is ${response.data.token}`);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'auth_success', payload: response.data.token });
            navigate('appFlow');

        }
        catch (error) {
            console.log(`error is ${error.response.data}`)
            dispatch({ type: 'loading_state', payload: false })
            dispatch({ type: 'error_state', payload: error.response.data })
        }
    }
}
const UserSignIn = (dispatch) => {
    return async (email, password) => {
        dispatch({ type: 'loading_state', payload: true });
        console.log('called');
        try {
            const response = await AxiosInstance.post('/signin', {
                "email": email,
                "password": password
            });
            dispatch({ type: 'loading_state', payload: false });
            console.log(`response is ${response.data.token}`);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'auth_success', payload: response.data.token });
            navigate('appFlow');

        }
        catch (error) {
            console.log(`error is ${error.response.data}`)
            dispatch({ type: 'loading_state', payload: false })
            dispatch({ type: 'error_state', payload: error.response.data })
        }
    }
}
const UserSignOut = (dispatch) => {
    return async () => {
        console.log('signout called')
        try {
            
            await AsyncStorage.removeItem('token');
            await dispatch({ type: 'signout' })
            navigate('splash');
        }
        catch (error) {
            console.log(`error log is ${error}`)
        }

    }
}

const CurentUserToken = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            dispatch({ type: 'update_token', payload: token })
            navigate('appFlow');
        }
        else {
            navigate('loginFlow');
        }
    }
}



export const { Context, Provider } = ContextCreator
    (AuthReducer,
        { UserSignIn, UserSignOut, UserSignUp, CurentUserToken },
        { token: null, errorMsg: '', loadingState: false });
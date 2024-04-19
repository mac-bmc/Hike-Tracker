import ContextCreator from "./ContextCreator";
import AxiosInstance from "../api/AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";


const TrackReducer = (state, action) => {
    switch (action.type) {
        case 'save-track':
            {
                return { ...state/* , msg: action.payload */ };
            }
        case 'fetch-track':
            {
                return action.payload;
            }
        default:
            {
                return state;
            }

    }
}


const SaveTrack = (dispatch) => {
    return async (name, location) => {
    
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await AxiosInstance.post('/tracks', {
                "name": name,
                "locations": location
            },
            {headers:{
                Authorization:"Bearer "+token
            }});
            console.log(`response - ${response.data}`)
            dispatch({ type: 'save-track', payload: response.data })
            

        }
        catch (error) {
            console.log(`trackPostError ${error.response.data}`)
            dispatch({ type: 'save-track', payload: error.response.data })
        }
    }

}

const FetchTrack = (dispatch) => {
    return async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await AxiosInstance.get('/tracks',{
                headers:{
                    Authorization:"Bearer "+token
                }
            }
            );
            dispatch({ type: 'fetch-track', payload: response.data })

        }
        catch (error) {
            console.log(`trackPostError ${error.response.data}`)
            dispatch({ type: 'fetch-track', payload: error.response.data })
        }
    }
}


export const { Context, Provider } = ContextCreator(TrackReducer, { SaveTrack, FetchTrack },
    [])
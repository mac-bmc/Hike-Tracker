import ContextCreator from "./ContextCreator";

const LocationReducer = (state, actions) => {
    switch (actions.type) {
        case 'addCurrentLocation':
            {
        

                return { ...state, currentLocation: actions.payload }
            }
        case 'addLocation':
            {
                
                return { ...state, location: [...state.location, state.currentLocation] }
            }
        case 'startRecording':
            {
                return { ...state, isRecording: true }
            }
        case 'stopRecording':
            {
                return { ...state, isRecording: false }
            }
        case 'changeName':
            {
                return { ...state, name:actions.payload }
            }
        default:
            {
                return state;
            }
    }
}


const StartTrackRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'startRecording' })

    }
}
const StopTrackRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'stopRecording' })
    }
}
const AddTrackRecording = (dispatch) => {
    return (location,isRecording) => {
        dispatch({ type: 'addCurrentLocation', payload: location })
        if(isRecording===true)
        {
           
            dispatch({type:'addLocation'})
        }
    }
}
const ChangeName = (dispatch) => {
    return (name) => {
        dispatch({ type: 'changeName', payload: name })
    }
}

export const { Context, Provider } = ContextCreator(LocationReducer, { StartTrackRecording, StopTrackRecording, AddTrackRecording, ChangeName },
    { location:[], isRecording: false, currentLocation: null, name: null });


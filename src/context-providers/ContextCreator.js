import React from "react";
import { useReducer } from "react";

export default (reducer , actions , initialState) => {

    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer,initialState)

        const boundActions = {}

        for(let key in actions)
        {
            boundActions[key] = actions[key](dispatch);
        }

        return(
            <Context.Provider value={{state:state, boundActions: boundActions}}>{children}</Context.Provider>
        );
    }

    return {Context , Provider} ;

}
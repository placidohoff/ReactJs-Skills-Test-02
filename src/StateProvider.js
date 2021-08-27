import React, { createContext, useContext, useReducer} from 'react';

//Declare data-layer:
export const StateContext = createContext();

//Use data-layer to wrap our entire app/
    //App can now access this global data:

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>

        {children}

    </StateContext.Provider>
);

// Allow information to be available via state
export const useStateValue = () => useContext(StateContext);
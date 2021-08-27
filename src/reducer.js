import { Schema } from './data/BasicUser'

export const initialState = {
    user:{
        type: ''
    }
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log(action.user)
            if(action.item.type === 'user') 
                state.user = Schema

            return{
                ...state
            }
        default:
            return state;
    }
}
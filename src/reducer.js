import { Schema } from './data/BasicUser'
import { IndexFunds } from './data/IndexFunds'

export const initialState = {
    user:{
        type: ''
    },
    indexFunds: []
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log(action.user)
            if(action.item.type === 'user'){ 
                state.user = Schema
                state.indexFunds = IndexFunds
            }
            return{
                ...state
            }
        default:
            return state;
    }
}
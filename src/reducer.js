import { Schema } from './data/BasicUser'
import { getIndexFunds } from './data/IndexFunds'
import { getArtistTokens } from './data/Tokens/ArtistTokens'

export const initialState = {
    user:{
        type: ''
    },
    indexFunds: [],
    artistTokens: []
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            console.log(action.user)
            if(action.item.type === 'user'){ 
                state.user = Schema
                state.indexFunds = getIndexFunds()
                state.artistTokens = getArtistTokens()
            }
            return{
                ...state
            }
        default:
            return state;
    }
}
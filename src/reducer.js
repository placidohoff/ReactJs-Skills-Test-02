export const initialState = {
    user:{
        type: ''
    }
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            state.user.type = action.item.type
            return{
                ...state
            }
        default:
            return state;
    }
}
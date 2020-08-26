import CartActionTypes from './cart.types'

const INITIal_STATE ={
    hidden: true
}

const cartReducer = (state = INITIal_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGEL_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;
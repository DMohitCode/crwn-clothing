import CartActionTypes from './cart.types'
import { addItemToCart } from './cart.utils'
const INITIal_STATE ={
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIal_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGEL_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: 
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
}

export default cartReducer;
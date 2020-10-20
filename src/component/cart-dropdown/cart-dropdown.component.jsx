import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.style.scss'

import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selector'
import { connect } from 'react-redux';

const CartrDropdown = ({cartItems}) =>(
    <div className="cart-dropdown">
    <div className="cart_itmes">
        {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
        ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartrDropdown);
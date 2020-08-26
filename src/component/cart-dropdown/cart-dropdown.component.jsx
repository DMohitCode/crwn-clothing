import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.style.scss'

const CartrDropdown = () =>(
    <div className="cart-dropdown">
    <div className="cart_itmes"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartrDropdown;
import React from 'react'

import { ReactComponent as FoodCartIcon } from '../assets/cart.svg'
import './CartIcon.scss'

const CartIcon = () =>(
<div className='cart-icon'>
    <FoodCartIcon className='shopping-icon'>
    </FoodCartIcon>
    <span className='item-count'>0</span>
</div>
)

export default CartIcon;
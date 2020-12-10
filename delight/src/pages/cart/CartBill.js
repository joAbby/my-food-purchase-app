import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDetails from './CartDetails';

import {
  Caption,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@react-md/table';

import './Cart.scss'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/CartSelector';

const CartBill = ({ cartItems, total }) => 

  {
    return(cartItems.length ? (
    <div>
<Table className='cartitem__container'>
<TableHeader className='cart__header'>
  <TableRow>
    <TableCell className='header__block'>Product</TableCell>
    <TableCell className='header__block'>Description</TableCell>
    <TableCell className='header__block'>Quantity</TableCell>
    <TableCell className='header__block'>Price</TableCell>
    <TableCell className='header__block'>Remove</TableCell>
  </TableRow>
</TableHeader>
<TableBody>
  <TableRow className='cart__Item'>
  {cartItems.map(cartItem => (
      <CartDetails key={cartItem.id} item={cartItem} />
    ))}
  </TableRow>
  <TableRow className='cart__Item'>
  <TableCell className='total__container'>TOTAL: ${total}</TableCell>
    <div price={total} />
  </TableRow>
</TableBody>
</Table>

    </div>):  (<div>Your cart is empty</div>)
     ) }
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CartBill);
import React, { useState } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@react-md/table";

import CartItems from "./CartItems"
import Popup from '../../common/Popup'
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/CartSelectors";
import {
  selectCurrentUser,
} from "../../redux/user/UserSelectors";

import "./Cart.scss";
import { Button } from "react-md";

const Cart = ({ cartItems, total, currentUser}) => {
  const[isPopUp,setPopup]=useState(false);

  function toggle() {
    setPopup(!isPopUp);
  }

  return cartItems.length ? (
    <div>
      <Table className="cartitem__container">
        <TableHeader className="cart__header">
          <TableRow>
            <TableCell className="header__block">Product</TableCell>
            <TableCell className="header__block">Description</TableCell>
            <TableCell className="header__block">Quantity</TableCell>
            <TableCell className="header__block">Price</TableCell>
            <TableCell className="header__block">Remove</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="cart__Item">
            {cartItems.map((cartItem) => (
              <CartItems key={cartItem.id} item={cartItem} />
            ))}
          </TableRow>
          <TableRow className="cart__Item">
            <TableCell className="total__container">TOTAL: ${total}</TableCell>
            <div price={total} />
            </TableRow>
            <TableRow className="cart__Item">
            <TableCell className="total__container">
            <Button className="cart__Item--button" onClick={()=>setPopup(true)}>order</Button></TableCell>
            {
              currentUser?isPopUp && (<Popup message={"Order Successful"} toggle={toggle}></Popup>):
              isPopUp &&(<Popup message={"Please login to place order"} toggle={toggle}></Popup>)
            }
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ) : (
    <div>Your cart is empty</div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser:selectCurrentUser,
});

export default connect(mapStateToProps)(Cart);

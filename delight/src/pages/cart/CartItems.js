import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/CartActions";

import "./CartItems.scss";

const CartItems = ({ item, clearItem, addItem, removeItem }) => {
  const { itemName, imageUrl, price,GST, quantity } = item;
  return (
    <>
      <div className="image">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="text">{itemName}</div>
      <div className="quantity">
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </div>
      <div className="text">{price}</div>
      <div className="remove__button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItems);

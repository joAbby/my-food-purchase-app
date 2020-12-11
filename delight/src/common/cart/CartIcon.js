import React from "react";

import { ReactComponent as FoodCartIcon } from "../../assets/cart.svg";

import "./CartIcon.scss";

const CartIcon = () => (
  <div className="cart__icon">
    <FoodCartIcon className="shopping__icon"></FoodCartIcon>
    <span className="item__count"></span>
  </div>
);

export default CartIcon;

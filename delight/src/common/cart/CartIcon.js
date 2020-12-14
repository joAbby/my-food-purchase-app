import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { selectCartItemsCount } from "../../redux/cart/CartSelectors";
import { ReactComponent as FoodCartIcon } from "../../assets/cart.svg";

import "./CartIcon.scss";

const CartIcon = ({ itemCount }) => (
  <div className="cart__icon">
    <FoodCartIcon className="shopping__icon"></FoodCartIcon>
    <span className="item__count">{itemCount}</span>
  </div>
);

CartIcon.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);

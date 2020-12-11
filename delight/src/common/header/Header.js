import { NavLink } from "react-router-dom";
import { useState } from "react";
import { GoogleLogout } from 'react-google-login';
import  { Redirect } from 'react-router-dom'

import { AppBar, AppBarAction, AppBarNav } from "@react-md/app-bar";
import { Link } from "@react-md/link";
import { SVGIcon } from "@react-md/icon";
import { TextIconSpacing } from "@react-md/icon";
import { VerticalDivider } from "@react-md/divider";

import CartIcon from "../../common/cart/CartIcon";
import logo from "../../logo.svg";

import "./Header.scss";

const Header = ({user}) => {
  return (
    <AppBar theme="default" className="header__container">
      <div className="logo__container">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
      </div>
      <VerticalDivider />
      <div className="options__container">
      <NavLink to="/login" className="option__link">
          <TextIconSpacing>
          {user ? "" : "SIGN IN"}
          </TextIconSpacing>
          </NavLink>
        <VerticalDivider />
        <NavLink to="/cart" className="option__link">
          <CartIcon />
        </NavLink>
      </div>
    </AppBar>
  );
};

export default Header;

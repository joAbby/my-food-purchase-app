import { NavLink } from "react-router-dom";
import { useState } from "react";

import { AppBar, AppBarAction, AppBarNav } from "@react-md/app-bar";
import { Link } from "@react-md/link";
import { SVGIcon } from "@react-md/icon";
import { TextIconSpacing } from "@react-md/icon";
import { VerticalDivider } from "@react-md/divider";

import CartIcon from "../../common/cart/CartIcon";
import logo from "../../logo.svg";

import "./Header.scss";

const Header = () => {
  const [currentUser, setCurrentUser] = useState("Joseline");
  return (
    <AppBar theme="default" className="header__container">
      <div className="logo__container">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
      </div>
      <VerticalDivider />
      <div className="options__container">
        <Link href="" flexCentered className="option__link">
          <TextIconSpacing>
            {currentUser ? "SIGN OUT" : "SIGN IN"}
          </TextIconSpacing>
        </Link>
        <VerticalDivider />
        <NavLink to="/cart" className="option__link">
          <CartIcon />
        </NavLink>
      </div>
    </AppBar>
  );
};

export default Header;

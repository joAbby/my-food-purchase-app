import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink } from "react-router-dom";

import { AppBar } from "@react-md/app-bar";
import { Link } from "@react-md/link";
import { TextIconSpacing } from "@react-md/icon";
import { VerticalDivider } from "@react-md/divider";

import CartIcon from "../../common/cart/CartIcon";
import logo from "../../logo.svg";
import { selectCurrentUser } from "../../redux/user/UserSelectors";

import "./Header.scss";

const Header = ({ currentUser }) => {
  return (
    <AppBar theme="default" className="header__container">
      <div className="logo__container">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
      </div>
      <VerticalDivider />
      <div className="options__container">
        {currentUser ? (
          <Link className="option__link">
            <TextIconSpacing></TextIconSpacing>
          </Link>
        ) : (
          <NavLink to="/login" className="option__link">
            <TextIconSpacing>SIGN IN</TextIconSpacing>
          </NavLink>
        )}
        <VerticalDivider />
        <NavLink to="/cart" className="option__link">
          <CartIcon />
        </NavLink>
      </div>
    </AppBar>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);

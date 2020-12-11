import { Link } from '@react-md/link';
import { AppBar, AppBarAction, AppBarNav } from '@react-md/app-bar';
import { TextIconSpacing } from '@react-md/icon';
import { VerticalDivider } from '@react-md/divider';
import { SVGIcon } from '@react-md/icon';
import { useState } from 'react';

import './Header.scss';
import { NavLink } from "react-router-dom";

import CartIcon from '../../common/CartIcon'

const Header = () =>{

const [currentUser,setCurrentUser] =useState('Joseline');
return(
<AppBar theme="default" className='header__container'>
<div className='logo__container'>
    <img 
      src='/'
      alt="Logo" 
    /></div>
    <VerticalDivider />
    <div className='options__container'>
	{currentUser ? (
	    <Link href="" flexCentered className='optionLink'>
      <TextIconSpacing icon={<CartIcon role="presentation" />}>
        SIGN OUT
      </TextIconSpacing>
    </Link>):
	(
	    <Link href="" flexCentered className='optionLink'> 
      <TextIconSpacing icon={<CartIcon role="presentation" />}>
        SIGN IN
      </TextIconSpacing>
    </Link>)}
	    <VerticalDivider />
	<NavLink to='/cart' className='optionLink'>
    <CartIcon/>
    </NavLink>
</div>
  </AppBar>
)
}

export default Header;
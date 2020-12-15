import React from 'react'

import { Button } from '@react-md/button';
import {
    CloseSVGIcon,
  } from '@react-md/material-icons';

import './Popup.scss'

const Popup =({message,toggle})=> (
  <div className='popup'>  
  <div className='popup__Text'>{message}</div>  
  <Button className="popup__button"
      buttonType="icon"
      themeType="outline"
      theme="primary"
      aria-label="Close"
      onClick={toggle}>  <CloseSVGIcon /></Button>
  </div>  

  );   
  
  export default Popup;
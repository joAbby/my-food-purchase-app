import React, { useState } from 'react'
import { GridList } from 'react-md';

import MenuItem from '../../common/MenuItem';

import './HomePage.scss';

const HomePage = () => {

const  items= [
        {
          itemName: 'hats',
          price:50,
          imageUrl: '',
          id: 1
        },
        {
          itemName: 'hats',
          price:50,
          imageUrl: '',
          id: 2
        },
        {
          itemName: 'hats',
          price:50,
          imageUrl: '',
          id: 3
        },
        {
          itemName: 'hats',
          price:50,
          imageUrl: '',
          size: 'large',
          id: 4
        },
        {
          itemName: 'hats',
          price:50,
          imageUrl: '',
          size: 'large',
          id: 5
        }
      ]
const [itemList, setItemList] =useState(items)

    return (
      <div className ='homepage'>
          <MenuItem itemList={itemList}></MenuItem>
      </div>
    );
    }
export default HomePage;
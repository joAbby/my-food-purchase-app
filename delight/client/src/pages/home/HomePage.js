import React, { useState, useEffect } from "react";

import MenuItem from "../../common/MenuItem/MenuItem";
import { getItemList } from "../../service";

import "./HomePage.scss";

const HomePage = () => {
  
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getItemList()
      .then(items => {
        setItemList(items)
        })
  }, [])
  return (
    <div className="homepage">
      <MenuItem itemList={itemList}></MenuItem>
    </div>
  );
};
export default HomePage;

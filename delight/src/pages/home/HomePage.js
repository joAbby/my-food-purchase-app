import React, { useState } from "react";

import MenuItem from "../../common/MenuItem/MenuItem";

import "./HomePage.scss";

const HomePage = () => {
  const items = [
    {
      itemName: "Burger",
      price: 150,
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      itemName: "Pizza",
      price: 300,
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      itemName: "Donut",
      price: 100,
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      itemName: "Sandwich",
      price: 100,
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      itemName: "Pastry",
      price: 50,
      imageUrl: "ttps://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
    {
      itemName: "Chicken Biriyani",
      price: 150,
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 6,
    },
    {
      itemName: "Shawarma",
      price: 120,
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 7,
    },
    {
      itemName: "Pepsi",
      price: 100,
      imageUrl: "ttps://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 8,
    },
  ];
  const [itemList, setItemList] = useState(items);

  return (
    <div className="homepage">
      <MenuItem itemList={itemList}></MenuItem>
    </div>
  );
};
export default HomePage;

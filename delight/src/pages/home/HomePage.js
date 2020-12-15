import React, { useState } from "react";

import MenuItem from "../../common/MenuItem/MenuItem";

import "./HomePage.scss";

const HomePage = () => {
  const items = [
    {
      itemName: "Burger",
      price: 150,
      imageUrl: "/images/burger.jpeg",
      id: 1,
    },
    {
      itemName: "Pizza",
      price: 300,
      imageUrl: "images/pizza.jpeg",
      id: 2,
    },
    {
      itemName: "Donut",
      price: 100,
      imageUrl: "images/donut.jpg",
      id: 3,
    },
    {
      itemName: "Sandwich",
      price: 100,
      imageUrl: "images/sandwich.jpg",
      size: "large",
      id: 4,
    },
    {
      itemName: "Pastry",
      price: 50,
      imageUrl: "images/pastry.jpeg",
      size: "large",
      id: 5,
    },
    {
      itemName: "Chicken Biriyani",
      price: 150,
      imageUrl: "images/Chicken-Biryani.jpg",
      id: 6,
    },
    {
      itemName: "Shawarma",
      price: 120,
      imageUrl: "images/shawarma.jpeg",
      size: "large",
      id: 7,
    },
    {
      itemName: "Pepsi",
      price: 100,
      imageUrl: "images/pepsi.jpeg",
      size: "large",
      id: 8,
    },
  ];
  const [itemList] = useState(items);
  return (
    <div className="homepage">
      <MenuItem itemList={itemList}></MenuItem>
    </div>
  );
};
export default HomePage;

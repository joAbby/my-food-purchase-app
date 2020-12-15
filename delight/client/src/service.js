export const getItemList = () => {
  return fetch("http://localhost:5000/items").then((data) => data.json());
};

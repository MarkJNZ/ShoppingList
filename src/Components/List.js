import React from "react";
import ListItem from "./ListItem.js";

const List = ({ items, removeItem }) => {
  const currentItems = items.map(item => (
    <ListItem item={item} key={item.id} removeItem={removeItem} />
  ));

  return (
    <>
      <h2>List</h2>
      {currentItems}
    </>
  );
};

export default List;

import React from "react";
import ListItem from "./ListItem.js";

const List = ({ items, removeItem, toggleItemCheck }) => {
  const currentItems = items.map(item => (
    <ListItem
      item={item}
      key={item.id}
      removeItem={removeItem}
      toggleItemCheck={toggleItemCheck}
    />
  ));

  return (
    <>
      <h2>List</h2>
      {currentItems}
    </>
  );
};

export default List;

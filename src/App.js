import React, { Component } from "react";
import List from "./Components/List";
import AddItemForm from "./Components/AddItemForm";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Boeing 747", checked: false },
      { id: 2, name: "Airbus A380", checked: false }
    ]
  };
  handleToggleItemCheck = id => {
    const items = this.state.items;
    const index = items.findIndex(item => item.id === id);
    const item = items[index];
    const newItem = { ...item, checked: !item.checked };

    const itemsNew = newItem.checked
      ? [...items.slice(0, index), ...items.slice(index + 1), newItem]
      : [newItem, ...items.slice(0, index), ...items.slice(index + 1)];

    // const itemsNew = [
    //   ...items.slice(0, index),
    //   newItem,
    //   ...items.slice(index + 1)
    // ];

    //sorting ascending:
    // itemsNew.sort((a, b) =>
    //   a.checked > b.checked ? 1 : b.checked > a.checked ? -1 : 0
    // );
    //sorting Descending:
    // itemsNew.sort((a, b) => {
    //   let order = a.checked > b.checked ? 1 : b.checked > a.checked ? -1 : 0;
    //   return order * -1;
    // });
    // //simplified sorting"
    // itemsNew.sort((a, b) => a.checked - b.checked);

    this.setState({
      items: itemsNew
    });
  };
  handleRemoveItem = id => {
    const items = this.state.items;
    const index = items.findIndex(item => item.id === id);
    const itemsNew = [...items.slice(0, index), ...items.slice(index + 1)];
    this.setState({
      items: itemsNew
    });
  };
  handleAddItem = item => {
    const newItem = { id: this.state.items.length + 1, name: item };
    const items = [newItem, ...this.state.items];
    console.log(items);
    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div className="App">
        <List
          items={this.state.items}
          removeItem={this.handleRemoveItem}
          toggleItemCheck={this.handleToggleItemCheck}
        />
        <AddItemForm addItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;

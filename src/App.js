import React, { Component } from "react";
import List from "./Components/List";
import AddItemForm from "./Components/AddItemForm";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Boeing 747" },
      { id: 2, name: "Airbus A380" }
    ]
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
        <List items={this.state.items} removeItem={this.handleRemoveItem} />
        <AddItemForm addItem={this.handleAddItem} />
      </div>
    );
  }
}

export default App;

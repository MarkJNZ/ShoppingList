import React, { Component } from "react";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const item = this.state.currentItem;
    this.props.addItem(item);
    this.setState({ currentItem: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add Item</label>
        <input
          type="text"
          value={this.state.currentItem}
          onChange={e => this.setState({ currentItem: e.target.value })}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddItemForm;

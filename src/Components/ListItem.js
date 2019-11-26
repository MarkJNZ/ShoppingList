import React, { Component } from "react";
import styles from "./ListItem.module.css";

class ShoppingItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: true
    };
  }
  handleChangeChk = e => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  handleRemoveItem = e => {
    console.log("Remove Item");
  };
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.itemText}>
          <p>{this.props.item.name}</p>
        </div>

        <div className={styles.buttons}>
          <input
            type="checkbox"
            className={styles.checkbox}
            defaultChecked={this.state.isChecked}
            value={this.state.isChecked}
            onChange={this.handleChangeChk}
          />

          <button
            onClick={() => {
              this.props.removeItem(this.props.item.id);
            }}
            className={styles.button}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingItem;

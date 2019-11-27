import React, { Component } from "react";
import styles from "./ListItem.module.css";

class ShoppingItem extends Component {
 
  

   render() {
    let checkedStyle = this.state.isChecked ? styles.checked : styles.unChecked

    return (      
        <div className={`${styles.item} ${checkedStyle}`}>
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

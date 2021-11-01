import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CssTransition from "react-transition-group/CSSTransition";

import "./List.css";

class List extends Component {
  state = {
    items: [1, 2, 3],
  };

  addItemHandler = () => {
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(prevState.items.length + 1),
      };
    });
  };

  removeItemHandler = (selIndex) => {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item, index) => index !== selIndex),
      };
    });
  };

  render() {
    const listItems = this.state.items.map((item, index) => (
      <CssTransition key={index} classNames="fade-list" timeout={300}>
        <li className="ListItem" onClick={() => this.removeItemHandler(index)}>
          {item}
        </li>
      </CssTransition>
    ));

    return (
      <div>
        <button className="Button" onClick={this.addItemHandler}>
          Add Item
        </button>
        <p>Click Item to Remove.</p>
        {/* 偵測裡面的東西改變，自動加上in attribute */}
        <TransitionGroup component="ul" className="List">
          {listItems}
        </TransitionGroup>
      </div>
    );
  }
}

export default List;

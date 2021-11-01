import React from "react";
import Transition from "react-transition-group/Transition";
import CssTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CssTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "modalOpen",
        exit: "",
        exitActive: "modalClose",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CssTransition>
  );
};

export default modal;

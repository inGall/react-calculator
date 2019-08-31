import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const isOperator = val => {
      return !isNaN(val) || val === "." || val === "=";
    };

    return (
      <div
        className={`button ${
          isOperator(this.props.children) ? null : "operator"
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;

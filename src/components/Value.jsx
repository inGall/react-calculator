import React, { Component } from "react";
import "./Value.css";

class Value extends Component {
  render() {
    return <div className="value">{this.props.value}</div>;
  }
}

export default Value;

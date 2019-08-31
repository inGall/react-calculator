import React, { Component } from "react";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Value from "./components/Value";
import * as math from "mathjs";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.writeToValue = this.writeToValue.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.computeValue = this.computeValue.bind(this);
  }

  writeToValue(val) {
    this.setState({
      value: this.state.value + val
    });
  }

  computeValue() {
    if (this.state.value !== "") {
      try {
        this.setState({
          value: math.evaluate(this.state.value)
        });
      } catch (err) {
        alert("Not valid operation");
      }
    }
  }

  clearValue() {
    this.setState({
      value: ""
    });
  }

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Value value={this.state.value}></Value>
          <div className="row">
            <Button handleClick={this.writeToValue}>8</Button>
            <Button handleClick={this.writeToValue}>7</Button>
            <Button handleClick={this.writeToValue}>9</Button>
            <Button handleClick={this.writeToValue}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.writeToValue}>5</Button>
            <Button handleClick={this.writeToValue}>4</Button>
            <Button handleClick={this.writeToValue}>6</Button>
            <Button handleClick={this.writeToValue}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.writeToValue}>1</Button>
            <Button handleClick={this.writeToValue}>2</Button>
            <Button handleClick={this.writeToValue}>3</Button>
            <Button handleClick={this.writeToValue}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.writeToValue}>.</Button>
            <Button handleClick={this.writeToValue}>0</Button>
            <Button handleClick={this.computeValue}>=</Button>
            <Button handleClick={this.writeToValue}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.clearValue}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

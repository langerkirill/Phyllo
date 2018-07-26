import React, { Component } from "react";
import P5Wrapper from "../P5Wrapper/";

export default class App extends Component {
  constructor() {
    super();
    this.state = { status: "", size: 10, angle: 137.5, speed: 10, value: null };
  }

  getValue = (value) => this.setState({ value });

  onReady = () => this.setState({ status: "ready" });

  onSliderChange = (field) =>
    (event) => {
      this.setState({ [field]: +event.target.value });
    }


  render() {
    return (
      <div className="app">
        <P5Wrapper
          p5Props={{ size: this.state.size, angle: this.state.angle, speed: this.state.speed }}
          getValue={this.getValue}
          onReady={this.onReady}
        />
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.size}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={1}
            value={this.state.size}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderChange('size')}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Adjust point size
        </p>
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.angle}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={1}
            value={this.state.angle}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderChange('angle')}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Adjust point angle
        </p>
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.speed}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={1}
            value={this.state.speed}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderChange('speed')}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Adjust point speed
        </p>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/atorov/react-p5js">
            <img border="0" alt="github logo" src="/img/github-logo.png" width="auto" height="28px" style={{ verticalAlign: "middle" }}/>
          </a>
        </p>
      </div>
    );
  }
}

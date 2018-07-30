import React from "react";
import P5Wrapper from "../P5Wrapper/";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { status: "", size: 5, angle: 137.5, speed: 150, hue: 150, value: null, random:false, shape:'point'  };
    this.handleClick = this.handleClick.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  getValue = (value) => this.setState({ value });

  onReady = () => this.setState({ status: "ready" });

  onSliderChange = (field) =>
    (event) => {
      this.setState({ [field]: +event.target.value });
    }

  handleClick () {
    let bool = !this.state.random;
    this.setState({random: bool});
  }

  updateField(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="app">
        <div className="info-box">
          <p>Click on the screen to reset the pattern</p>
          <a>Link to my linkedIn</a>
          <p style={{ textAlign: "center" }}>
            <a href="https://github.com/atorov/react-p5js">
              <img border="0" alt="github logo" src="/img/github-logo.png" width="auto" height="28px" style={{ verticalAlign: "middle" }}/>
            </a>
          </p>
        </div>
        <P5Wrapper
          p5Props={{ size: this.state.size, angle: this.state.angle, speed: this.state.speed, hue: this.state.hue, random: this.state.random, shape: this.state.shape }}
          getValue={this.getValue}
          onReady={this.onReady}
        />
      <section className="knobs">
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
          Adjust size
        </p>
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.angle}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={0.5}
            value={this.state.angle}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderChange('angle')}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Adjust angle
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
          Adjust speed
        </p>
        <div style={{ textAlign: "center" }}>
          <strong>{this.state.hue}</strong>
          <br />
          <input type="range"
            min={5} max={290} step={1}
            value={this.state.hue}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderChange('hue')}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          Adjust hue
        </p>
        <div style={{ textAlign: "center" }}>
          <br />
          <button
            value={this.state.random}
            style={{ width: "90%", maxWidth: "900px" }}
            onClick={this.handleClick}>
            <span className="blue">R</span>
            <span className="red">a</span>
            <span className="orange">n</span>
            <span className="blue">d</span>
            <span className="green">o</span>
            <span className="red">m</span>
            <span className="blue"> </span>
            <span className="red">C</span>
            <span className="orange">o</span>
            <span className="blue">l</span>
            <span className="green">o</span>
            <span className="red">r</span>
            <span className="blue">s</span>
          </button>
        </div>
        <label> Shape <br/>
          <select className="shape-input" value={this.state.shape} onChange={this.updateField('shape')}>
            <option selected="selected" value="point">Point</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
          </select>
        </label>
        </section>
      </div>
    );
  }
}

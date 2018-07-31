import React from 'react';

class InfoBox extends React.Component {

  render() {
    return (
        <div className="info-popup">
          <p> Phyllotaxis is a botanical concept that describes the arrangement of leaves on a plant stem. </p>
          <p>Phyllotactic spirals are a specific class of patterns that recur in nature. </p>
          <img src="https://i.pinimg.com/originals/21/bc/7d/21bc7d496c58d0d311052ecfb1aeadec.jpg"/>
          <p>  Fermat's spiral outlines the mathematics behind phyllotaxis. </p>
          <p> 137.508° is the golden angle which is approximated by ratios of Fibonacci numbers, this determines spiral angle. </p>
        </div>
    );
  }
}

export default InfoBox;

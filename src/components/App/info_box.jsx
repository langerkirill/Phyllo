import React from 'react';

class InfoBox extends React.Component {

  render() {
    return (
        <div className="info-popup">
          <strong> Phyllotaxis is a botanical concept that describes the arrangement of leaves on a plant stem. </strong>
          <strong>Phyllotactic spirals are a specific class of patterns that recur in nature. </strong>
          <img src="https://i.pinimg.com/originals/21/bc/7d/21bc7d496c58d0d311052ecfb1aeadec.jpg"/>
          <strong>  Fermat's spiral outlines the mathematics behind phyllotaxis. </strong>
          <strong> 137.508° is the golden angle which is approximated by ratios of Fibonacci numbers, this determines spiral angle. </strong>
        </div>
    );
  }
}

export default InfoBox;

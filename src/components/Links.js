import React, { Component } from 'react';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import stackoverflow from '../images/stackoverflow.png';

class Links extends Component {
  render() {
    return (
      <div className="links">
        <div>
          <img src={github} alt="github"></img>
          <img src={linkedin} alt="linkedin"></img>
          <img src={stackoverflow} alt="stackoverflow"></img>
        </div>
      </div>
    );
  }
}

export default Links;
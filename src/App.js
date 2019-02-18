import React, { Component } from 'react';
import {
  Jumbotron, Button, Row, Col
} from 'reactstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="main">
          <h1 className="display-3">React app img WebP test!</h1>
          <Row className="d-flex justify-content-center mt-4">
            <Col sm="4">
              <h5>
                Normal JPEG image for all Browsers
              </h5>
              <div>
                <img />
              </div>
            </Col>
            <Col sm="4">
              <h5>
                WebP image. This image won't be shown at Safary and etc. (all list of browsers you can check here..)
              </h5>
              <div>
                
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default App;

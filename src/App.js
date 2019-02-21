import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import './App.css';

const PictureComponent = (props) => {
  console.log(props);

  const imgSrcSetWebP = `${props.src.webp}`;
  const imgSrcSetJPG = `${props.src.jpg}`;

  return (
    <div>
      <picture>
        <source srcSet={imgSrcSetWebP} type="image/webp" />
        <img src={imgSrcSetJPG} alt="insert alt text here"/>
      </picture>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="display-3">React app img WebP test!</h1>
          <Row className="d-flex justify-content-center mt-4">
            <Col xm="4">
              <Row className="col-header">
                <h5>Normal JPEG image for all Browsers with img default type</h5>
              </Row>
              <div>
                <img src={require('./imges/1.sm.jpg')} />
              </div>
            </Col>
            <Col xm="4">
              <Row className="col-header">
                <h5>WebP image. This image won't be shown at Safary and etc. (all list of browsers you can check here..) with img type `type="image/webp"`</h5>
              </Row>
              <div>
                <img type="image/webp" src='https://www.gstatic.com/webp/gallery/2.sm.webp' />
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-4">
            <Col xm="8">
              <h5>
                {`Image container with the <picture> element, followed by two different <source> elements. In Safari browser will be shown JPEG image, in another will be chosen WebP image`}
              </h5>
              <PictureComponent
                src={{
                  webp: 'https://www.gstatic.com/webp/gallery/2.sm.webp',
                  jpg: 'https://www.gstatic.com/webp/gallery/1.sm.jpg'
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

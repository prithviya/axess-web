import React from 'react';
import './about.css';
import { Container, Row, Col} from 'react-bootstrap';

const about = () => {
  return (
    <div>
      <div className='gs-homeabout'>
            <div className='gs-section-spacer'>
            <Container>
                <Row>
                <Col sm={4}>
                  <h2 className='text-uppercase gs-underline-50'>
                    Who We Are
                  </h2> 
                </Col>
                <Col sm={8}>
                  <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </h5>
                  <p className='gs-about-contentbg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>
                </Col>
                </Row>
            </Container>
            </div>
        </div>
    </div>
  )
}

export default about
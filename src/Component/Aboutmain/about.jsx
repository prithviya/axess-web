import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
export const about = () => {
  return (
    <div>
      <div className='gs-homeabout'>
            <div className='gs-section-spacer'>
            <Container>
                <Row>
                <Col sm={4}>sm=4</Col>
                <Col sm={8}>sm=8</Col>
                </Row>
            </Container>
            </div>
        </div>
    </div>
  )
}


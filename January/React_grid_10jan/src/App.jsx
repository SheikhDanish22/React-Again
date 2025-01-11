import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App () {
  return (
    <>
  <Container >
      <Row>
        <Col className='pt-2 bg-danger' md={3}>1</Col>
        <Col className='pt-2 bg-primary' md={6}>2</Col>
        <Col className='pt-2 bg-danger' md={3}>3</Col>
        
      </Row>
    </Container>
    <Container >
      <Row>
        <Col className='pt-2 bg-primary'  md={3}>1</Col>
        <Col className='pt-2 bg-danger'  md={3}>2</Col>
        <Col className='pt-2 bg-warning'  md={3}>3</Col>
        <Col className='pt-2 bg-info'  md={3}>4</Col>
      </Row>
    </Container>
    <Container >
      <Row>
        <Col className='pt-2 bg-danger'  md={2}>1</Col>
        <Col className='pt-2 bg-warning'  md={2}>2</Col>
        <Col className='pt-2 bg-warning-subtle'  md={2}>3</Col>
        <Col className='pt-2 bg-danger'  md={6}>4</Col>
      </Row>
    </Container>
    <Container >
      <Row>
        <Col className='pt-2 bg-warning-subtle' md={3}>1</Col>
        <Col className='pt-2 bg-primary' md={6}>2</Col>
        <Col className='pt-2 bg-black' md={3}>3</Col>
        
      </Row>
    </Container>
    </>
  )
}

export default  App
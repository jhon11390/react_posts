import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Posts from './components/posts'


class App extends React.Component {
  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="text-center">Blog post populares</h1>
          </Col>
        </Row>
        <Posts />
      </Container>
    );
  }
}

export default App;

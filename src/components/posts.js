import React from 'react';
import {Container, Row, Col, Media, Alert, Card, Button } from 'react-bootstrap';
import posts from './postsdata'


class Posts extends React.Component {
    constructor() {
        super();
    
        this.state = {
          asce: "outline-primary mr-2",
          desce: "primary",
          data: posts
        }
    }

    boton() {
      this.setState({
        asce: "primary mr-2",
        desce: "outline-primary",
        data: this.state.data.sort(function(a ,b){
          return b.votes - a.votes
        })
      })
    }
    
    boton2() {
      this.setState({
        asce: "outline-primary mr-2",
        desce: "primary",
        data: this.state.data.sort(function(a ,b){
          return a.votes - b.votes
        })
      })
    }

    botonup(id) {
      const {data: data_old } = this.state;
      data_old.map(p => {
        if (p.id === id) {
          p.votes += 1;
          return p;
        }
        return p;
      });
      if(this.state.asce === "primary mr-2"){
        this.setState({
          data: this.state.data.sort(function(a ,b){
              return b.votes - a.votes
          })
        });
      }else {
        this.setState({
          data: this.state.data.sort(function(a ,b){
              return a.votes - b.votes
          })
        });
      }
    }
  
    botondown(id) {
      const {data: data_old } = this.state;
      data_old.map(p => {
        if (p.id === id) {
          p.votes -= 1;
          return p;
        }
        return p;
      });
      if(this.state.asce === "primary mr-2"){
        this.setState({
          data: this.state.data.sort(function(a ,b){
              return b.votes - a.votes
          })
        });
      }else {
        this.setState({
          data: this.state.data.sort(function(a ,b){
              return a.votes - b.votes
          })
        });
      }
    }

    render() {
      return (
        <Container>
          <Row className="mt-4">
            <Col md={{span: 8, offset: 2}}>
              <span className="h4">Orden: </span>
              <Button variant={this.state.asce} onClick={this.boton.bind(this)}>Ascendente</Button>
              <Button variant={this.state.desce} onClick={this.boton2.bind(this)}>Descendente</Button>
            </Col>
          </Row>
          {this.state.data.map((date) =>
            <Row className="justify-content-md-center mt-4" key={date.id}>
              <Col md={8}>
                <ul className="list-unstyled">
                  <Media as="li">
                    <img
                      width={190}
                      height={130}
                      className="mr-3"
                      src={date.post_image_url}
                      alt="Generic placeholder"
                    />
                    <Row>
                      <Col>
                        <Card border="light" style={{ width: '8rem' }}>
                          <Card.Body>
                            <Card.Text>
                              <span className="question-upvote">
                                <span className="upvote-arrow" onClick={() => this.botonup(date.id)}></span>
                                <span className="upvote-count">{date.votes}</span>
                                <span className="downvote-arrow" onClick={() => this.botondown(date.id)}></span>
                              </span>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Media.Body>
                      <Alert.Link href={date.url} target="_blank">{date.title}</Alert.Link>
                      <p>
                        {date.description}
                      </p>
                      <p className="text-muted">
                        Escrito por: 
                        <img
                          width={25}
                          height={25}
                          className="rounded-circle ml-2"
                          src={date.writer_avatar_url}
                          alt="Generic placeholder"
                        />
                      </p>
                    </Media.Body>
                  </Media>
                </ul>
              </Col>
            </Row>
          )}
        </Container>
      )
    }
}

export default Posts;
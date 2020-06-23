import React from 'react';
import {Container, Row, Col, Button, Media, Alert, Card } from 'react-bootstrap';
import './App.css';


class App extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        title: 'Manejo de dependencias en Ruby con Bundler',
        description: 'Bundler es una manejador de dependencias para Ruby. Aunque viene incluido con Rails, Bundler no es exclusivo de Rails, lo puedes usar para manejar las dependencias de cualquier proyecto de Ruby.',
        url: 'http://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/',
        votes: 42,
        writer_avatar_url: 'http://a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
        post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/bundler.jpg',
      },
      {
        id: 2,
        title: 'Descubre si Make it Real es para ti',
        description: 'En Make it Real buscamos entrenar a los desarrolladores Web que nosotros mismos quisiéramos contratar. Personas con autodisciplina que sean capaces de resolver problemas complejos y se adapten rápidamente a nuevas tecnologías y escenarios. En este post vamos a discutir algunas características de nuestro programa para que descubras si Make it Real es para ti.',
        url: 'http://blog.makeitreal.camp/descubre-si-make-it-real-es-para-ti/',
        votes: 43,
        writer_avatar_url: 'http://a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
        post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/laptop-sublime.jpg',
      },
      {
        id: 3,
        title: '¿Qué es código?',
        description: 'Semáforos, automóviles, aviones, aeropuertos, satélites, el sistema financiero, gran parte de nuestras vidas depende del código que varias generaciones de programadores han escrito. Pero ¿qué es código? ¿quién lo ejecuta y cómo? En este post vamos a hacer un recorrido histórico para entender cómo es que la electricidad se convierte en código y cómo surgieron los lenguajes de programación.',
        url: 'http://blog.makeitreal.camp/que-es-codigo/',
        votes: 44,
        writer_avatar_url: 'http://a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
        post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/code.jpg',
      },
      {
        id: 4,
        title: 'Aprende Desarrollo Web gratis',
        description: '¿Quieres iniciar en el mundo del desarrollo Web y no sabes por dónde empezar? Conoce Aprende Desarrollo Web, un curso completamente gratis dirigido a personas sin experiencia en el que aprenderás a crear y publicar sitios interactivos en Internet con HTML, CSS y JavaScript.',
        url: 'http://blog.makeitreal.camp/aprende-desarrollo-web-gratis/',
        votes: 45,
        writer_avatar_url: 'http://a.disquscdn.com/uploads/users/2864/1155/avatar92.jpg?1481303405',
        post_image_url: 'http://blog.makeitreal.camp/assets/images/bg-images/aprende-desarrollo-web-bg.png',
      },
    ]
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="text-center">Blog post populares</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={{span: 8, offset: 2}}>
            <span className="h4">Orden: </span>
            <Button variant="outline-primary mr-2">Ascendente</Button>
            <Button variant="primary">Descendente</Button>
          </Col>
        </Row>
        {data.map((date) =>
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
                            <a className="question-upvote">
                              <span className="upvote-arrow"></span>
                              <span className="upvote-count">{date.votes}</span>
                              <span className="downvote-arrow"></span>
                            </a>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Media.Body>
                    <Alert.Link href={date.url}>{date.title}</Alert.Link>
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
    );
  }  
}

export default App;

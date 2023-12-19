import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import booksData from '../data/books.json';

const AllTheBooks = () => {
  const renderBooks = (category) => {
    return booksData[category].map((book) => (
      <Col key={book.asin} md={4}>
        <Card style={{ marginBottom: '20px' }}>
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <p>Price: ${book.price}</p>
              <p>Category: {book.category}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <h1>Libreria</h1>

        <h2>Fantasy</h2>
      <Row id='category'>
        {renderBooks('fantasy')}
      </Row>

        <h2>History</h2>
      <Row id='category'>
        {renderBooks('history')}
      </Row>
        <h2>Horror</h2>
      <Row id='category'>
        {renderBooks('horror')}
      </Row>
        <h2>Sci-fi</h2>
      <Row id='category'>
        {renderBooks('scifi')}
      </Row>
        <h2>Romance</h2>
      <Row id='category'>
        {renderBooks('romance')}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
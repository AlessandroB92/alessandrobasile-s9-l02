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
      <h1>Lista dei Libri</h1>

      <Row>
        <h2>Fantasy</h2>
        {renderBooks('fantasy')}
      </Row>

      <Row>
        <h2>History</h2>
        {renderBooks('history')}
      </Row>
      <Row>
        <h2>History</h2>
        {renderBooks('horror')}
      </Row>
      <Row>
        <h2>History</h2>
        {renderBooks('scifi')}
      </Row>
      <Row>
        <h2>History</h2>
        {renderBooks('romance')}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
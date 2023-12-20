import React, { useState } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Search from "./Search";
import booksData from "../data/books.json";

const AllTheBooks = () => {
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);

  const renderBooks = (category) => {
    return filteredBooks[category].map((book) => (
      <Col key={book.asin} md={4} style={{ marginBottom: "20px" }}>
        <Card onClick={() => handleBookClick(book)}
          style={{
          cursor: "pointer",
          border: selectedBook === book ? "3px solid red" : "1px solid black",}}>
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
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = (query) => {
    const filtered = Object.keys(booksData).reduce((result, category) => {
      result[category] = booksData[category].filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      return result;
    }, {});

    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className="d-flex-column text-center">
        <h1 className="p-0">Lista dei Libri</h1>

        <Search onSearch={handleSearch} />
      </div>

      <Container>
        {Object.keys(filteredBooks).map((category) => (
          <Row key={category}>
            <h2>{category}</h2>
            {renderBooks(category)}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default AllTheBooks;

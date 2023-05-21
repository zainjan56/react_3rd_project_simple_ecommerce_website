import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import "./ProductListing.css";

const ProductListing = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    // console.log(data);
    setUsers(data);
  };
  //console.log(users[0].id);
  //console.log(users)

  useEffect(() => {
    fetchData();
  }, []);

  if (users.length === 0) {
    return <div>...Loading</div>;
  }
  return (
<Row xs={1} md={4} className="g-4">
{users.map((item) => (
  <Col>
  <Link to={`/details/${item.id}`}>
  <Card id="myCard">
      <Card.Img variant="top" src={item.image} className="image"/>
      <Card.Body>
        <Card.Title id="title">{item.title}</Card.Title>
        <p className="price"><b>${item.price}</b></p>
        <Link to="/carts" className='Links'>
        <button className="button"><b>Add To Cart</b></button>
        </Link>
      </Card.Body>
    </Card></Link>
  </Col>
))}
</Row>
  );
};

export default ProductListing;

import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productCard, setProductCard] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    let url = `https://my-json-server.typicode.com/Exit-c/exit_hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setProductCard(data);
  };
  useEffect(() => {
    getProduct();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productCard.map((item, index) => (
            <Col lg={3} key={index}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

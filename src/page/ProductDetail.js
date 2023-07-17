import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const StyleDetail = styled.div`
  margin-top: 80px;
  .product-img {
    display: flex;
    justify-content: flex-end;
  }
  .product-info h2 {
    font-size: 23px;
  }
  .product-info select {
    border-color: #ccc;
    width: 130px;
    display: block;
    margin-bottom: 15px;
  }
  .product-info button {
    width: 470px;
    border: 1px solid #ccc;
    color: #fff;
    background-color: #333;
  }
`;

const ProductDetail = () => {
  const size = ['S', 'M', 'L'];

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // json파일 products의 id키의 값과 일치하는 정보를 가져옴
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Exit-c/exit_hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <StyleDetail>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col className="product-info">
            <h2>{product?.title}</h2>
            <p>{`₩ ${product?.price}`}</p>
            <p>{product?.choice === true ? 'Conscious Choice' : ''}</p>
            <select>
              <option value="first">사이즈 선택</option>
              {size.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <button type="button">추가</button>
          </Col>
        </Row>
      </Container>
    </StyleDetail>
  );
};

export default ProductDetail;

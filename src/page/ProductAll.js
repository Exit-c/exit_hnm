import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../store/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const dispatch = useDispatch();
  const productCard = useSelector((state) => state.product.productCard);
  const [query, setQuery] = useSearchParams();

  // json products 가져오기
  const getProducts = () => {
    let searchQuery = query.get('q') || ''; // 'q'라는 쿼리 값을 가져옴 없을시 ''로 빈문자열 할당

    dispatch(productAction.getProduct(searchQuery)); // searchQuery를 넘겨줌
  };

  useEffect(() => {
    getProducts();
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

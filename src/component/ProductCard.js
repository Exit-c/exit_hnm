import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const StyleItemCard = styled.div`
    margin-top: 100px;
    transition: 0.2s;
    :hover {
      transform: scale(1.1);
    }
    img {
      width: 300px;
      height: 450px;
    }
    h2 {
      font-size: 20px;
    }
  `;
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <StyleItemCard onClick={showDetail}>
      <img src={item?.img} />
      <p>{item?.choice === true ? 'Conscious Choice' : ''}</p>
      <h2>{item?.title}</h2>
      <p>{item?.price}</p>
      <p>{item?.new === true ? '신제품' : ''}</p>
    </StyleItemCard>
  );
};

export default ProductCard;

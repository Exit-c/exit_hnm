import { productActions } from '../reducers/productReducer';

function getProduct(searchQuery) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/Exit-c/exit_hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    dispatch(productActions.getAllProduct({ data })); // payload로 data를 넣어줌
  };
}

export const productAction = { getProduct };

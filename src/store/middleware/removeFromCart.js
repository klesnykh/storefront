import { fetchProducts } from "./fetchproducts";

export const fetchRemoveFromCart = (product) => async (dispatch) => {
  console.log('product to remove before fetch', product.inStock);
  let response = await fetch(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ inStock: product.inStock }),
  });
  let data = await response.json();
  console.log('product to remove after fetch', data);
  
  dispatch(fetchProducts());

  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  });
}
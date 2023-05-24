import { fetchProducts } from "./fetchproducts";

export const fetchAddToCart = (product) => async (dispatch) => {
  let response = await fetch(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ inStock: product.inStock-1 }),
  });
  let data = await response.json();
  console.log(data);
  
  dispatch(fetchProducts());

  dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
}
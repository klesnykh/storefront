export const fetchProducts = () => async (dispatch) => {
  let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
  let data = await response.json();
  let products = data.results;

  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: products
  });
}
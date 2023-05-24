import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

import { createStore, combineReducers } from 'redux';

let reducers = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
});

function store() {
  return createStore(reducers);
}

export default store;
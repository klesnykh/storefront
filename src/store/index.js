'use strict';

import categoryReducer from './categories';
import productsReducer from './products';

import { createStore, combineReducers } from 'redux';

let reducers = combineReducers({
  category: categoryReducer,
  products: productsReducer,
});

function store() {
  return createStore(reducers);
}

export default store;
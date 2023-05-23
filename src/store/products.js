/*
  How do our products look?

  let product = {
    name: 'ball',
    description: 'this ball is so fricken cool brah',
    category: 'BALLS'
  }
*/

let products = [
  {
    name: 'VOLLEYBall',
    description: 'this ball is so fricken cool brah',
    category: 'VOLLEYBALL',
    stock: 5,
  },
  {
    name: 'Shoes - vball',
    description: 'these shoes are so fricken cool brah',
    category: 'VOLLEYBALL',
    stock: 5,
  },
  {
    name: 'Vball - Net',
    description: 'this net is so fricken cool brah',
    category: 'VOLLEYBALL',
    stock: 5,
  },
  {
    name: 'SOCCER Ball',
    description: 'this ball is so fricken cool brah',
    category: 'SOCCER',
    stock: 5,
  },
  {
    name: 'Cleats',
    description: 'these cleats are so fricken cool brah',
    category: 'SOCCER',
    stock: 5,
  },
  {
    name: 'Goal Posts / Net',
    description: 'this setup will get you kickin brah',
    category: 'SOCCER',
    stock: 5,
  },
];

let initialState = {
  products: products,
};

function productsReducer(state = initialState, action) {
  switch (action.payload) {
  case 'ADD_SINGLE_PRODUCT':
    //action.payload is a name
    //find the product, add 1 to it's stock
    return {
      products: state.products.map(product => {
        if (product.name === action.payload) {
          product.stock = product.stock + 1;
        }
        return product;
      }),
    };
  case 'REMOVE_SINGLE_PRODUCT':
    //action.payload is a name
    //find the product, remove 1 from it's stock
    return {
      products: state.products.map(product => {
        if (product.name === action.payload) {
          product.stock = product.stock - 1;
        }
        return product;
      }),
    };
  default: return state;
  }
}

export default productsReducer;
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
    price: 80,
  },
  {
    name: 'Shoes - vball',
    description: 'these shoes are so fricken cool brah',
    category: 'VOLLEYBALL',
    stock: 5,
    price: 100,
  },
  {
    name: 'Vball - Net',
    description: 'this net is so fricken cool brah',
    category: 'VOLLEYBALL',
    stock: 5,
    price: 400,
  },
  {
    name: 'SOCCER Ball',
    description: 'this ball is so fricken cool brah',
    category: 'SOCCER',
    stock: 5,
    price: 70,
  },
  {
    name: 'Cleats',
    description: 'these cleats are so fricken cool brah',
    category: 'SOCCER',
    stock: 5,
    price: 100,
  },
  {
    name: 'Goal Posts / Net',
    description: 'this setup will get you kickin brah',
    category: 'SOCCER',
    stock: 5,
    price: 1500,
  },
];

let initialState = {
  products: products,
};

function productsReducer(state = initialState, action) {
  switch (action.payload) {
  case 'REMOVE_FROM_CART':
    //action.payload is a name
    //find the product, add 1 to it's stock
    return {
      products: state.products.map(product => {
        if (product === action.payload) {
          product.stock = product.stock + 1;
        }
        return product;
      }),
    };
  case 'ADD_TO_CART':
    //action.payload is a product
    //find the product, remove 1 from it's stock
    return {
      products: state.products.map(product => {
        if(product===action.payload){
          product.stock = product.stock - 1; 
        }
        return product;
      }),
    };
  default: return state;
  }
}

export default productsReducer;
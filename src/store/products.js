let initialState = {
  products: [],
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
  // case 'REMOVE_FROM_CART':
  //   //action.payload is a name
  //   //find the product, add 1 to it's stock
  //   return {
  //     products: state.products.map(product => {
  //       if (product === action.payload) {
  //         product.stock = product.stock + 1;
  //       }
  //       return product;
  //     }),
  //   };
  // case 'ADD_TO_CART':
  //   //action.payload is a product
  //   //find the product, remove 1 from it's stock
  //   return {
  //     products: state.products.map(product => {
  //       if(product===action.payload){
  //         product.inventoryCount = product.inventoryCount - 1; 
  //       }
  //       return product;
  //     }),
  //   };
  case 'FETCH_PRODUCTS':
    return {
      products: action.payload
    }
  default: return state;
  }
}

export default productsReducer;
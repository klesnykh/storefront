let initialState = {
  list: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    //action.payload is a product
    console.log(action.payload);
    return {
      list: [...state.list, action.payload]
    };
  case 'REMOVE_FROM_CART':
    //action.payload is a PRODUCT
    //find the product, remove 1 from it's stock
    let newCart = state.list.filter(product => product!==action.payload);
    return {
      list: newCart,
    };
  default: return state;
  }
}

export default cartReducer;
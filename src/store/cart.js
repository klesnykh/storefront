let initialState = {
  list: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_TO_CART':
    //action.payload is a product
    console.log(action.payload);
    let newList = [...state.list, action.payload];
    localStorage.setItem('cart', JSON.stringify(newList));
    return {
      list: newList,
    };
  case 'REMOVE_FROM_CART':
    //action.payload is a PRODUCT
    //find the product, remove 1 from it's stock
    let newCart = state.list.filter(product => product!==action.payload);
    localStorage.setItem('cart', JSON.stringify(newCart));
    return {
      list: newCart,
    };
  case 'LOAD_CART':
    return{
      list: action.payload,
    }
  default: return state;
  }
}

export default cartReducer;
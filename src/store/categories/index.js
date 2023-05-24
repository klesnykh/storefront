const initialState = {
  categories: [],
  activeCategory: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_CATEGORY':
    return {
      ...state,
      categories: [...state.categories, action.payload],
    };
  case 'REMOVE_CATEGORY':
    return {
      ...state,
      categories: state.categories.filter(category => category!==action.payload),
    };
  case 'SET_ACTIVE_CATEGORY':
    console.log(action.payload);
    return {
      ...state,
      activeCategory: action.payload,
    };
    case 'FETCH_PRODUCTS':
      let products = action.payload;
      let cats = {};
      products.forEach(product => {
        if(!cats[product.category]){
          cats[product.category] = 1;
        }
      });
      let allCategories = Object.keys(cats);
      return {
        categories: allCategories,
      }
  default: return state;
  }
}

export default categoryReducer;
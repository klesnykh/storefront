const initialState = {
  categories: ['VOLLEYBALL', 'SOCCER'],
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
  default: return state;
  }
}

export default categoryReducer;
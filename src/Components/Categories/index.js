import { useSelector, useDispatch } from 'react-redux';
import Products from './Products';
import Button from '@mui/material/Button';

function Categories (){

  let categories = useSelector(currentState => currentState.category.categories);
  let categoryState = useSelector(currentState => currentState.category);
  const dispatch = useDispatch();
  console.log(categoryState);


  let categoriesToScreen = categories.map((category, idx) => {
    return(
      <Button variant="outlined" key={idx} onClick={()=>toggleCategory(category)}>{category}</Button>
    );
  });

  function toggleCategory (category){
    dispatch({
      type: 'SET_ACTIVE_CATEGORY',
      payload: category,
    });
  }

  return(
    <>
      {categoriesToScreen}
      <Products/>
    </>
  );
}

export default Categories;
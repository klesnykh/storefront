import { useSelector, useDispatch } from 'react-redux';
import Products from './Products';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/middleware/fetchproducts';

function Categories (){

  let categories = useSelector(currentState => currentState.category.categories);
  const dispatch = useDispatch();


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

  useEffect(() => {
    dispatch(fetchProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <>
      {categoriesToScreen}
      <Products/>
    </>
  );
}

export default Categories;
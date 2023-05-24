import { useSelector, useDispatch } from 'react-redux';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Products (){
  let allProducts = useSelector(currentState => currentState.products.products);
  let activeCategory = useSelector(currentState => currentState.category.activeCategory);
  const dispatch = useDispatch();
  
  let products = [];
  if(activeCategory){
    products = allProducts.filter(product => product.category===activeCategory);
  }
  else{
    products = allProducts;
  }

  function addToCart (product){
    console.log(product);
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  }

  // const modalStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

  function openModal(product){
    console.log('MODAL SHOULD OPEN HERE:', product.name);
  }
  
  let productsToScreen = products.map((product, idx) => {
    return(
      <Card key={idx} variant="outlined">
        <CardContent>
          <Typography>{product.name}</Typography>
        </CardContent>
        <CardContent>{product.description}</CardContent>
        <CardContent>{product.price}</CardContent>
        <Button variant="outlined" onClick={()=>openModal(product)}>VIEW DESCRIPTION</Button>
        <Button variant="outlined" onClick={()=>addToCart(product)}>ADD TO CART</Button>
      </Card>
    );
  });

  return(
    <>
      {productsToScreen}
    </>
  );
}

export default Products;
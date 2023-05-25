import { useSelector, useDispatch } from 'react-redux';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchAddToCart } from '../../../store/middleware/addToCart';
import BasicModal from './ProductDetails';

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
    dispatch(fetchAddToCart(product));
  }
  
  let productsToScreen = products.map((product, idx) => {
    return(
      <Card key={idx} variant="outlined">
        <CardContent>
          <Typography>{product.name}</Typography>
        </CardContent>
        <CardContent>{product.description}</CardContent>
        <CardContent>${product.price}</CardContent>
        <CardContent>In Stock: {product.inStock}</CardContent>
        <BasicModal product={product}/>
        {product.inStock>0&&<Button variant="outlined" onClick={()=>addToCart(product)}>ADD TO CART</Button>}
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
import { useSelector } from 'react-redux';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Products (){
  let allProducts = useSelector(currentState => currentState.products.products);
  let activeCategory = useSelector(currentState => currentState.category.activeCategory);
  console.log(activeCategory);
  let products = [];
  if(activeCategory){
    products = allProducts.filter(product => product.category===activeCategory);
  }
  else{
    products = allProducts;
  }
  
  let productsToScreen = products.map((product, idx) => {
    return(
      <Card key={idx} variant="outlined">
        <CardContent>
          <Typography>{product.name}</Typography>
        </CardContent>
        <CardContent>{product.description}</CardContent>
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
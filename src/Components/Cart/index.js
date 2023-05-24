import { useSelector, useDispatch } from 'react-redux';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cart() {
  let cart = useSelector(currentState => currentState.cart.list);
  const dispatch = useDispatch();

  let productsToScreen = cart.map((product, idx) => {
    return(
      <Card key={idx} variant="outlined">
        <CardContent>
          <Typography>{product.name}</Typography>
        </CardContent>
        <CardContent>{product.description}</CardContent>
        <CardContent>{product.price}</CardContent>
        <Button variant="outlined" onClick={()=>removeFromCart(product)}>REMOVE</Button>
      </Card>
    );
  });

  function removeFromCart(product){
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  }

  return(
    <>
      {productsToScreen}
    </>
  )

}

export default Cart;
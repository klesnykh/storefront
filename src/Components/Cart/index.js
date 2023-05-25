import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function Cart() {
  let cart = useSelector(currentState => currentState.cart.list);
  const dispatch = useDispatch();

  useEffect(() => {
    let cartFromStorage = JSON.parse(localStorage.getItem('cart'));
    console.log(cartFromStorage);
    if (cartFromStorage) {
      dispatch({
        type: 'LOAD_CART',
        payload: cartFromStorage
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let productsToScreen = cart.map((product, idx) => {
    return (
      <ListItem key={idx}>
        <ListItemText primary={product.name}/>
        <Typography variant="body2">${product.price}</Typography>
        <Button variant="outlined" onClick={()=>removeFromCart(product)}>REMOVE</Button>
      </ListItem>
    );
  });

  function removeFromCart(product) {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })
  }

  return (
    <div >
      <form>
        <Paper >
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {productsToScreen}
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom >
                Billing Address
              </Typography>
              <TextField id="name" name="name" label="Full Name" />
              <TextField id="address" name="address" label="Address" />
              <TextField id="city" name="city" label="City" />
              <TextField id="state" name="state" label="State" />
              <TextField id="zip" name="zip" label="zip" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom >
                Payment details
              </Typography>
              <TextField id="cc_number" name="cc_number" label="Credit Card #" />
              <TextField
                id="date"
                label="Expiration"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id="cvv" name="cvv" label="CVV" />
            </Grid>
          </Grid>

          <Grid container alignItems="center" justify="center" spacing={5}>
            <Grid item>
              <Button variant="contained" color="primary">Place Your Order</Button>
            </Grid>
          </Grid>
          </Paper>
      </form>
    </div >
  )

}

export default Cart;
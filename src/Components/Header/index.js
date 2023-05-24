import { useSelector, useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';


function Header() {
  const dispatch = useDispatch();

  let cart = useSelector(currentState => currentState.cart.list);
  let cartSize = cart.length;
  let simpleCart = cart.map((product, idx) => {
    return (
      <ListItem key={idx} disablePadding>
        <ListItemText primary={product.name} secondary={`$ ${product.price}`}/>
        <ListItemButton>
          <ListItemText primary="Remove" onClick={() => removeCartItem(product)} />
        </ListItemButton>
      </ListItem>
    );
  })

  function removeCartItem(product) {
    console.log('REMOVE CART ITEM');
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    });
  }


  return (
    <header>
      <h1>Sporting Goods Store</h1>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/cart'>Cart - {cartSize}</a></li>
        </ul>
      </nav>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
          {simpleCart}
        </List>
      </Box>
    </header>
  )
}

export default Header;
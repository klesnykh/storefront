import './App.css';
import Header from './Components/Header';
import Categories from './Components/Categories';
// import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import createStore from './store';
import Cart from './Components/Cart';

function App() {
  let component;
  switch(window.location.pathname){
    case '/':
      component = <Categories/>
      break
    case '/cart':
      component = <Cart/>
      break
    default:
      component = <Categories/>
  }

  return (
    <Provider store={createStore()}>
      <div className="App">
        <Header/>
        {component}
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;

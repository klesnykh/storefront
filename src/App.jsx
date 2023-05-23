import './App.css';
// import Header from './Components/Header';
import Categories from './Components/Categories';
// import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import createStore from './store';

function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        {/* <Header/> */}
        <Categories/>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;

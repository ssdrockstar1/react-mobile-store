import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import { ProductProvider } from './Components/Context';

function App() {
  return (
    <div className="App">
      <ProductProvider>
      <BrowserRouter>
      <NavBar/>
        <Switch>
         <Route exact path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route  component={Default}/>
         </Switch>  
      </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;

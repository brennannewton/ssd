import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import ProductList from './Components/ProductList';
import ProductInfo from './Components/ProductInfo';
import Cart from './Components/Cart/Cart';
import About from './Components/About';
import Err from './Components/Err';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/shop" component={ProductList}></Route>
        <Route path="/info" component={ProductInfo}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={Err}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

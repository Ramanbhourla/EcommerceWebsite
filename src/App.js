import React, { useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";
import Faq from "./Components/Faq";
import {Products} from '../src/JsonData/Products';
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllProducts from "./Components/AllProducts";

function App() {
  const [ProductData , setProductdata] =useState(Products);
  const [cartItems, setcartItems]  = useState([]);
  
 return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={'/products'} render={()=> <AllProducts ProductData={ProductData} />} />
        <Route exact path={'/cart'} render={()=> <Cart  cartItems={cartItems} />} /> 
        <Route exact path={'/faq'} component={Faq} />
        <Route exact path={'/checkout'} component={Checkout} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register}/>

      </Switch>
    </div>
  )
}

export default App;

import React,{useState}from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsshown,setCartIsshownn]=useState(false);
  const showcartHandler=()=>{
        setCartIsshownn(true);
  }
  const hideCartHandler=()=>{
        setCartIsshownn(false);
  };
  return (
    <CartProvider>
        {cartIsshown && <Cart onClose={hideCartHandler} cartDetails={cartIsshown}/>}
 
      <Header onShowCart={showcartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider> 
  );
}

export default App;

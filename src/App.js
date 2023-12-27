import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home";
import Shared from "./Shared";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Components/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
  'pk_test_51OOhI5HqWj70JuVug0QYMgjgCqunPeadnGjDJvBQBBW6tjRCNYL86jKs0SBwe9J4REBu9PlcaFWd0XGiI2FMKnNr00cUSagvgT'
);


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
      
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // ¨the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })

  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Home />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Payment" element=
           
            {<Elements stripe={promise}>
            <Payment />
          </Elements>}
          
          />
          <Route path="orders" element={ <Orders/>} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

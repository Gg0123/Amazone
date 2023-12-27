import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { Link } from "react-router-dom";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{basket},dispatch]=useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="Checkout Ad"
            className="checkout__ad"
          />
        </Link>
        <div>
          <h3 className="checkout__username">Hello</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

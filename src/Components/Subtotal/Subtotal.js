import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) => basket.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="subtotal__checkbox" type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Link to='../Payment'>
        <button className="subtotal__button" >Proceed to Checkout</button>
      </Link>
    </div>
    
  );
}

export default Subtotal
import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import moment from "moment";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import CurrencyFormat from "react-currency-format";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Orders</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <div className="order">
            <h2>Order</h2>
            <p>
              {moment.unix(order.data.created).format("MMMM Do YYYY,h:mma")}
            </p>
            <p className="order__id">
              <small>{order.id}</small>
            </p>

            {order.data.basket?.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hiddenButton
              />
            ))}

            <CurrencyFormat
              renderText={(value) => (
                <h3 className="order__total">Order Total:{value}</h3>)}
                decimalScale={2}
              value={order.data.amount/100}
              displayType={"text"}
              thousandSeparator={true }
              prefix={'$'}    
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

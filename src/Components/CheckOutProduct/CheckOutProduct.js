import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckOutProduct({ id, title,description, price, rating, image, hiddenButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={image.title} />
      <div className="checkoutProduct__info">
        <h4 className="checkoutProduct__title">{title}</h4>
        <h5 className="checkoutProduct__description">{description}</h5>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hiddenButton && (
          <button
            className="checkoutProduct__button"
            onClick={removeFromBasket}
          >
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;

import React from "react";
import "./Products.css";
import { useStateValue } from "../../StateProvider";

function Products({ id, title,description, price, rating, image }) {

  const [{ basket }, dispatch] = useStateValue();
// console.log('This is the basket:',basket);
  const addToBasket = () => {
   
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        rating: rating,
        image: image,
      },
    });

 }

  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Products;

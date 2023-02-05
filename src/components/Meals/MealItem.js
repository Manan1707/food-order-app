import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";

function MealItem(props) {
  const price = `$${props.MealPrice.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.MealName,
      amount: amount,
      price: props.MealPrice,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.MealName}</h3>
        <div className={classes.description}>{props.MealDescription}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;

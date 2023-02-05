import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Model from "../UI/Model";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  function cartRemoveHandler(id) {
    cartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  return (
    <Model onBackDrop={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartCtx.item.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {cartCtx.item.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Model>
  );
}

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  const { item } = cartCtx;

  const numberOfCartItem = cartCtx.item.reduce((curtNumber, item) => {
    return curtNumber + item.amount;
  }, 0);

  const btnAnimationClass = `${classes.button} ${
    btnAnimation ? classes.bump : ""
  }`;

  useEffect(() => {
    if (item.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [item]);

  return (
    <button className={btnAnimationClass} onClick={props.onCartClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
}

export default HeaderCartButton;

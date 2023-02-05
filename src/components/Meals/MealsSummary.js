import React from "react";

import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Deliverd to you!</h2>
      <p>
        Choose your favourite meal from our brand selection of available meals
        and enjoy a delicious lunch and dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
}

export default MealsSummary;

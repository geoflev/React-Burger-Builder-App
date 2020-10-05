import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  //transform the object ingredients which comes from props to Array so we can .map on it
  //keys makes an array with the keys [bacon, cheese, ..] f.e.
  // for every key in the array (f.e. bacon) we want to create an array which contains as many items as we pass
  // f.e. cheese: 3 (prop) -> [ , , ]
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />; //creates f.e. salad1, bacon2
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //with the reduce method we transform this array [array1, array2 ,array3] to a single array
  //so we can check when the ingredients array is empty
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;

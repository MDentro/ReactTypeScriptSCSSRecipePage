import React from "react";
import "./Ingredients.scss";

type RecipeIngredients = {
  ingredients: string[];
};

const Ingredients: React.FC<RecipeIngredients> = ({ ingredients }) => (
  <div className="ingredients-container">
    <p>Ingredients</p>
    <ul>
      {ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>;
      })}
    </ul>
  </div>
);
export default Ingredients;

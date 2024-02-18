import React from "react";
import "./Instructions.scss";

type RecipeInstructions = {
  instructions: string[];
};

const Instructions: React.FC<RecipeInstructions> = ({ instructions }) => (
  <div className="instructions-container">
    <p>Instructions</p>
    <ul>
      {instructions.map((instruction, index) => {
        return (
          <li key={index}>
            <span>{`${instruction.split(":")[0]}:`}</span>
            {instruction.split(":")[1]}
          </li>
        );
      })}
    </ul>
  </div>
);
export default Instructions;

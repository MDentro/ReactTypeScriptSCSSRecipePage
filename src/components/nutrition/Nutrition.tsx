import React from "react";
import "./Nutrition.scss";
interface NutritionData {
  nutrition: {
    title: string;
    introduction: string;
    calories: string;
    carbs: string;
    protein: string;
    fat: string;
  };
}

const Nutrition: React.FC<NutritionData> = ({ nutrition }) => {
  return (
    <div className="nutrition-container">
      {Object.entries(nutrition).map(([key, value], index) => {
        if (index === 0) {
          return <p key={index}>{value}</p>;
        } else if (index === 1) {
          return <p key={index}>{value}</p>;
        } else {
          return (
            <ul key={index}>
              <li>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
                <span className="value">{value}</span>
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default Nutrition;

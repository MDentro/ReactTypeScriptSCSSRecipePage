import React from "react";
import "./Preparation.scss";

interface PreparationData {
  preparation: {
    title: string;
    total: string;
    preparation: string;
    cooking: string;
  };
}

const Preparation: React.FC<PreparationData> = ({ preparation }) => {
  return (
    <div className="preparation-container">
      {Object.entries(preparation).map(([key, value], index) => {
        if (index === 0) {
          return <p key={index}>{value}</p>;
        } else {
          return (
            <ul key={index}>
              <li>
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}: </span>
                {value}
              </li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default Preparation;

import React, { useEffect } from "react";
import "./App.scss";

import data from "./data/recipe.json";
import Header from "./components/header/Header";
import Preparation from "./components/preparation/Preparation";
import Ingredients from "./components/ingredients/Ingredients";
import Instructions from "./components/instructions/Instructions";
import Nutrition from "./components/nutrition/Nutrition";

function App() {
  useEffect(() => {
    const scrollbarWidth: number =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.setProperty("--scrollbarWidth", `${scrollbarWidth}px`);
  }, []);
  return (
    <div className="page-container">
      <Header title={data[0].title} introduction={data[0].introduction} />

      <Preparation preparation={data[0].preparation} />

      <Ingredients ingredients={data[0].ingredients} />

      <Instructions instructions={data[0].instructions} />

      <Nutrition nutrition={data[0].nutrition} />
    </div>
  );
}

export default App;

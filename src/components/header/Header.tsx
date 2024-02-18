import React from "react";
import image from "../../assets/images/image-omelette.jpeg";
import "./Header.scss";

interface RecipeIntroduction {
  title: string;
  introduction: string;
}

const Header: React.FC<RecipeIntroduction> = ({ title, introduction }) => (
  <div className="header-container">
    <img alt="food" src={image} />
    <div className="introduction-container">
      <h1>{title}</h1>
      <p>{introduction}</p>
    </div>
  </div>
);
export default Header;

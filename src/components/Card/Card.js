import React from "react";
import "./Card.css";

const Card = ({ poster_path, title }) => {
  return (
    <div>
      <img src={poster_path}/>
      <h2>{title}</h2>
    </div>
  )
} 

export default Card
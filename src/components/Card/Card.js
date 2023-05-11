import React from "react";
import "./Card.css";

const Card = ({ img, title }) => {
  return (
    <div className="card">
      <img className="poster" src={img}/>
      <h2 className="title">{title}</h2>
    </div>
  )
} 

export default Card
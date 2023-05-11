import React from "react";
import "./Card.css";

const Card = ({ poster_path, title }) => {
  return (
    <div className="card">
      <img className="poster" src={poster_path}/>
      <h2 className="title">{title}</h2>
    </div>
  )
} 

export default Card
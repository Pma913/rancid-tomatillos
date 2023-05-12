import React from "react";
import "./Card.css";

const Card = ({ img, title, id }) => {
  return (
    <div onClick={event => console.log(id)} id={id} className="card">
      <img className="poster" src={img}/>
      <h2 className="title">{title}</h2>
    </div>
  )
} 

export default Card
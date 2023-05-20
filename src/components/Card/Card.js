import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ img, title, id }) => {
  return (
    <div id={id} className="card" >
      <img className="poster" src={img} alt={title}/>
      <h2 className="title">{title}</h2>
    </div>
  );
} 

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  id: PropTypes.number
}
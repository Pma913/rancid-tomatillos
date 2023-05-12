import React from "react";
import "./Card.css";
import { getMovies } from '../../utilities/api-calls'

const Card = ({ img, title, id }) => {
  return (
    <div id={id} className="card" onClick={() => {
      getMovies(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(data => console.log(data.movie))
      .catch(err => console.log(err));
    }}>
      <img className="poster" src={img}/>
      <h2 className="title">{title}</h2>
    </div>
  )
} 

export default Card;
import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";

const CardDisplay = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <Card
      key={movie.id} 
      id={movie.id} 
      img={movie.poster_path} 
      title={movie.title} />
      )
  })
  return (
    <div className="card-display">
      {movieCards}
    </div>
  )
}

export default CardDisplay;
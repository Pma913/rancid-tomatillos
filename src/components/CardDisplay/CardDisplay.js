import React from "react";
import "./CardDisplay.css";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

const CardDisplay = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return (
      <NavLink key={movie.id} to={`/movie/${movie.id}`} >
        <Card 
        id={movie.id} 
        img={movie.poster_path} 
        title={movie.title} 
        />
      </NavLink>
    )
  })
  return (
    <div className="card-display">
      {movieCards}
    </div>
  )
}

export default CardDisplay;
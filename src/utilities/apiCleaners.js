const cleanMovie = ({ movie }) => {
  return { 
    average_rating: movie.average_rating,
    backdrop_path: movie.backdrop_path,
    genres: movie.genres, 
    overview: movie.overview, 
    poster_path: movie.poster_path,
    runtime: movie.runtime,
    tagline: movie.tagline,
    title: movie.title
  }
}

export { cleanMovie }
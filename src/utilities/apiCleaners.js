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

const cleanVideos = ({ videos }) => {
  return videos.map(video => {
    return { key: video.key }
  });
}

const cleanAllMovies = ({ movies }) => {
  return movies.map(movie => {
    return {
      id: movie.id, 
      poster_path: movie.poster_path,
      title: movie.title 
    }
  });
}

export { 
  cleanMovie, 
  cleanVideos,
  cleanAllMovies
  }
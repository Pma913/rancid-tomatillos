import React from 'react';
import ReactPlayer from 'react-player';
import "./video.css"

const Video = ( { movie } ) => {
  if (movie) {
    return (
      <div>
        {<ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${movie.key}`} />}
      </div>
    )
  } else {
    return (
      <div className="no-movies-wrapper">
        <h2 className="no-video">Sorry, there currently are no videos available for this movie</h2>
        <p className="no-video2">Try searching <a href="https://www.youtube.com/">YouTube</a> for what you are looking for</p>
      </div>
    )
  }
}

export default Video;
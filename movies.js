import React from "react";

export default function Movies({ movie }) {
  return (
    <div>
      <div>
        <h3 className="font-medium py-3 text-center">{movie?.title}</h3>
        <img
          src={"https://image.tmdb.org/t/p/w300" + movie?.backdrop_path}
          alt={movie?.path}
        />
        <h3 className="text-sm py-2">Release date : {movie?.release_date}</h3>
        <h3 className="text-sm line-clamp-3">
          Overview : <br></br>
          {movie?.overview}
        </h3>
      </div>
    </div>
  );
}


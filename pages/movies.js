import React from "react";

export default function Movies({ movie }) {
  return (
    <div>
      <div>
        <h3 className="font-medium py-3 text-center">{movie?.title}</h3>
        <div className="flex justify-center">
          <img
            className="image-center"
            src={"https://image.tmdb.org/t/p/w300" + movie?.backdrop_path}
            alt={movie?.path}
          />
        </div>

        <h3 className="text-sm px-10 py-4">Release date : {movie?.release_date}</h3>
        <h3 className="text-sm px-10 line-clamp-3">
          Overview : <br></br>
          {movie?.overview}
        </h3>
      </div>
    </div>
  );
}

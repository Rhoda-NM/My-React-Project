import React from "react";
import MovieItem from "./movieItem";

function Movies({movies}) {
    const movieList = movies.map((movie) => {
        return <MovieItem
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            description={movie.description}
            showtime={movie.showtime}
            capacity={movie.capacity}
            />
    })
    return (
        <>
        <h2>Movies Available Currently</h2>
        <div id="movieList">
            {movieList}
        </div>
        </>
    )
}
export default Movies;
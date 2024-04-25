import React, { useState } from "react";

function MovieItem({title, description, showtime, capacity, poster="https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"}) {
    const [movieCapacity, setMovieCapacity] = useState(capacity)
    function handleChange() {
        setMovieCapacity(prevCapacity => prevCapacity - 1);
    };
    return (
        <div id="moviePoster">
            <h3>Movie Title: {title}</h3>
            <img src={poster} alt="movie poster" width="100px"/>
            <span>ShowTime: {showtime}</span><br />
            <span>Capacity: {movieCapacity}</span> <br />
            <button style={{color:'blue', padding:10}}onClick={handleChange}>Buy Ticket</button>
            <p>{description}</p>
        </div>
    )
}

export default MovieItem;
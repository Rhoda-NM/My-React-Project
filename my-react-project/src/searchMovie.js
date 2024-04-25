import React, { useState} from "react";

function SearchMovies({movies}){
    console.log(movies);
    const [searchMovie, setSearchMovie] = useState('');
    const [movieResult, setMovieResult] = useState([]);

    const handleChange = (e) => {
        setSearchMovie(e.target.value);
    };
    const handleSearch = () => {
        const filteredMovies = movies.filter(movie => 
             movie.title.toLowerCase().includes(searchMovie.toLowerCase())
        );
        setMovieResult(filteredMovies);
    }

    return (
        <div>
            <input style={{width: 200, height: 20, padding:10, marginTop: 20}} type="text" onChange={handleChange} />
            <button style={{width: 150, height: 40, padding: 10, marginTop: 20}} onClick={handleSearch}>Search Movie</button>
            <ul>
            {movieResult.map((movie) => {
                return <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={movie.poster} alt="movie poster" width="100px"/>
                    <span>ShowTime: {movie.showtime}</span><br />
                    <span>Capacity: {movie.capacity}</span> <br />
                    <button style={{color:'blue', padding:10}}onClick={handleChange}>Buy Ticket</button>
                    <p>{movie.description}</p>
                </li>
            })}
            </ul>
        </div>
    )

}

export default SearchMovies;
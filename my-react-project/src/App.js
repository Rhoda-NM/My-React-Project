//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Home from './Home';
import Movies from './movieList';
import SearchMovies from "./searchMovie";

console.log(data);
function App() {

  //console.log(data);
  return (
    <>
      <Home />
      <SearchMovies movies={data}/>
      <Movies movies={data} />
    </>
  );
}

export default App;

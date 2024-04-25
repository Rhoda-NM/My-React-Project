import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Home from './Home';
import Movies from './movieList';

console.log(data);
function App() {

  //console.log(data);
  return (
    <>
      <Home />
      <Movies movies={data} />
    </>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;

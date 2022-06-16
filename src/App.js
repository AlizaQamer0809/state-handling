import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import Addmovie from './components/Addmovie';
import { MovieProvider } from './MovieContext';
function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
      <Addmovie/>
      <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;

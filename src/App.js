import './App.css';
import {MovieList} from './MovieList'
import Navbar from './Navbar';
import AddMovie from './AddMovie'
function App() {
  return (
    
      <div className="App">
       <Navbar/>
       <AddMovie/>
       <MovieList/>
      </div>
    
  );
}

export default App;

import React,{useContext} from 'react'
import {MovieContext} from "./MovieContext";

const Navbar = () => {
 const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav>
            <p>Total movies: {movies.length}</p>
        </nav>
    )
}

export default Navbar

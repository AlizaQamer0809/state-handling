import React,{useContext} from 'react'
import { MovieContext } from '../MovieContext';
export default function Nav() {
    const[movies,setmovies]=useContext(MovieContext)
  return (
    <div>
        <h1>Aliza Qamer</h1>
        <p>List of Movies: {movies.length}</p>
    </div>
  )
}

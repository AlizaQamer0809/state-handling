import React, { useState, useContext  } from 'react'
import { MovieContext } from '../MovieContext';
import Movie from './Movie'

export default function MovieList() {
const[movies,setmovies]=useContext(MovieContext)
  
  return (
    
    <div>
        {movies.map((movie)=>(
            <Movie key={movie.id} name={movie.name} year={movie.year}/>
        ))}
    </div>
  )
}

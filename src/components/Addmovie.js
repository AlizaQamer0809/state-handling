import React, { useState,useContext } from 'react'
import { MovieContext } from '../MovieContext';

export default function Addmovie() {
    const[moviename,setmoviename]=useState('');
    const[movieyear,setmovieyear]=useState('');
    const[movies,setmovies]=useContext(MovieContext)

    const updatemoviename=(e)=>{
        setmoviename(e.target.value)
    }

    const updatemovieyear=(e)=>{
        setmovieyear(e.target.value)
    }

    const addmovie=(e)=>{
        e.preventDefault();
        setmovies(prevMovies=>[...prevMovies,{name:moviename,year:movieyear}])
    }

  return (
      
    <div>
        <form onSubmit={addmovie}>
            <input type="text" value={moviename} onChange={updatemoviename} placeholder="moviename"></input>
            <br/>
            <input type="number" value={movieyear} onChange={updatemovieyear} placeholder="movieyear"></input>
            <br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

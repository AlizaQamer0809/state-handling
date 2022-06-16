import React, {useState, createContext } from 'react'

export const MovieContext=createContext()

export const MovieProvider=props=> {
    const[movies,setmovies]=useState([
        {
            name:"HarryPotter",
            id:1,
            year:2015
        },
        {
            name:"3 Idiots",
            id:2,
            year:2018
        }
    ])

  return (
    <MovieContext.Provider value={[movies,setmovies]}>
        {props.children}
        </MovieContext.Provider>
  )
}

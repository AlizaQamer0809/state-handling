import React from 'react'


export default function Movie({name,year}) {

  return (
    <div>
        <h2>{name}</h2>
        <p>{year}</p>
    </div>
  )
}

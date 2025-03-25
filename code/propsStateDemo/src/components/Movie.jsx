import React from 'react'
import Movies from './Movies'

function Movie(props) {

  return (
    <div>
          <img src={props.image} alt={props.name} height={200}/>
          <h2>{props.name}</h2>

          <button onClick={() => props.handleCount(10)}>Click me</button>
    </div>
  )
}

export default Movie

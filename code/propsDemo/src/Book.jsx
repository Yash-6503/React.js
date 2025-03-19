import React from 'react'
import './style.css';

function Book(props) {
  return (
    <div className='box' id="b">
      <img src={props.imgLink} alt="java book" />
      <h4>Book Name: {props.name}</h4>
      {props.children}
    </div>
  )
}

export default Book

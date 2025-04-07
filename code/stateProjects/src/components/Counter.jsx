import React from 'react'
import '../App.css'
import { useState } from 'react';

function Counter() {
    let [counter, setCounter] = useState(1);
    function HandleCounter() {
        if (counter < 5) {
            setCounter(counter + 1);
        }
    }

    function HandleCounterdec() {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }
  return (
      <div>
            <h2>Product Quantity Counter</h2>
          <button
              onClick={HandleCounterdec}
          >
              -
          </button>
          <button>{counter}</button>
          <button
              onClick={HandleCounter}
          >
              +
          </button>


      </div>
  )
}

export default Counter

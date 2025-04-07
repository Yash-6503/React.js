import React, { useState } from 'react'
import '../App.css'

function ChangeMode() {
    let [mode, setMode] = useState(false); //false=dark, true=light

    function changetoDark() {
        setMode(!mode);
        document.body.style.backgroundColor = '#242424'
        document.body.style.color = 'rgba(255, 255, 255, 0.87)'
    }

    function changetoLight() {
        setMode(!mode);
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black';
    }
  return (
    <div>
          <h2>Change Theme of your Website</h2>
          <button
              onClick={changetoDark}
          >Dark Mode</button>  <></>
          <button
            onClick={changetoLight}
            >Light Mode</button> <></>
          <button
            onClick={mode ? changetoDark : changetoLight }
          >{mode ? 'Dark Mode' : 'Light Mode'}</button>
          
    </div>
  )
}

export default ChangeMode;

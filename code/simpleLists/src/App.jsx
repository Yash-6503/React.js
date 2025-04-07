import React from 'react'
import { useState } from 'react'
import './style.css';

function App() {

  const [show, setShow] = useState(true);
  const arr = [
    {
      img: "java.jpg",
      name: "Java",
    },
    {
      img: "js.jpg",
      name: "Javascript",
    },
    {
      img: "react.jpg",
      name: "React",
    },
    {
      img: "python.jpg",
      name: "Python",
    },
    
  ]
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Simple List Demo</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap:'10px', padding:'10px 50px'}}>
      {show && arr.map((v, i) => (
        <div key={v.name} className='key'>
          <img src={v.img} alt={v.name} height='200' />
          <h2>{v.name}</h2>
        </div>
      ))}


    </div>
      <button onClick={() => setShow(!show)} style={{width:'200px', marginTop:'40px', padding:'15px 10px', fontSize:'20px', border:'none', borderRadius:'10px', cursor:'pointer'}}>click me</button>
    </div>
  )
}

export default App

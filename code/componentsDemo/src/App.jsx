
import React from 'react'
import Movie from './components/Movie.jsx'

const App = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h1>Hello World</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', textAlign:'center'}}>
        {
          arr.map((v) => (
            <Movie/>
          ))
        }
      </div>
    </div>
  )
}

export default App;

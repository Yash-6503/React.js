
import React from 'react'
import Movie from './components/Movie.jsx'

const App = () => {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '50px', textAlign: 'center', margin: '50px 0px' }}>
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

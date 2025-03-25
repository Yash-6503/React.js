import React, { useState } from 'react'
import Movie from './Movie'

function Movies() {
    // const { name, image } = [props];

    const [count, setCount] = useState(0);

    const addCount = (n) => {
        setCount(count+n);
    }
  return (
      <div>
          <p>{count}</p>
          <Movie image="t.webp" name="tiger running" handleCount={ addCount} />
          <Movie image="Tiger.jpeg" name="tiger roaring" handleCount={addCount} />
    </div>
  )
}

export default Movies

import React from 'react'
// import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
  return (
    <div>
          <h3>Count : {count}</h3>
          <button onClick={() => setCount(count+1)}> + </button>
    </div>
  )
}
import { useState } from 'react'

export default Count

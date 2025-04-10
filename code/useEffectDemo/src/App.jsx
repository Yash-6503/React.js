import React, { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  async function fetchData() {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      setData(data);
    } catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div className='flex justify-center bg-gray-900 h-screen text-white'>
      <div className='border-0 px-4 py-8 md:w-2xl my-10 w-70 sm:w-auto text-center h-auto sm:h-[50%] md:h-[50%] sm:py-10 sm:px-10 bg-gray-800 rounded-2xl'>
        <div className='sm:py-3 text-2xl md:text-3xl font-extrabold'>
          <h2>Funny Jokes</h2>
        </div>
        <div className=' py-3 text-lg md:text-2xl font-semibold'>
          <p>{data.setup}</p>
        </div>
        <div className=' py-3 text-md md:text-lg font-medium'>
          <p>{data.punchline}</p>
        </div>
        <button
          onClick={() => setCount(count + 1)}
          className=' bg-blue-500 my-4 px-4 sm:px-8 py-2 rounded-2xl font-semibold cursor-pointer hover:bg-blue-600 focus:border-4 border-blue-800'
        >
          Next Joke
        </button>
        </div>
    </div>
  )
}

export default App

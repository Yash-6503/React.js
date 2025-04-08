import React, { useState } from 'react'

function App() {

  let [length, setLength] = useState(8);
  let [numbersAllowed, setNumbers] = useState(length);
  let [charAllowed, setCharacters] = useState(length);

  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num = "0123456789"
  let ch = "~!@#$%^&*_-+=?"

  function passwordGenerator(){}

  return (
    <div className=''>
      <div className=' bg-gray-900 text-white my-10 mx-44 py-10'>
        <h1 className='text-3xl font-extrabold text-center'>Password Generator App</h1>
        <div className=' flex justify-center items-center my-10 gap-1'>
          <input type="text" 
            readOnly
            className='w-[50%] border-3 border-blue-500 rounded-2xl px-10 py-2 outline-0 bg-gray-800 cursor-pointer'
            />
          <button
            className='px-6 py-3 bg-blue-500 rounded-2xl cursor-pointer hover:bg-blue-700 font-semibold'
            >Copy</button>
        </div>
        <div className='flex justify-center items-center gap-x-2 text-2xl'>
          <input type="range"
            min={0}
            max={100}
            defaultValue={8} 
            className='outline-0'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <p>Length ({length})</p>

          <input type="checkbox"
            className='w-5 h-5'
            
          />
          <p>Numbers</p>

          <input type="checkbox"
            className='w-5 h-5'
          />
          <p>Characters</p>
        </div>
      </div>
    </div>
  )
}

export default App

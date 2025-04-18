import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='px-20 py-10 bg-gray-100 h-screen'>
          <h1 className='text-center text-3xl font-extrabold'>Home Page</h1>
          
          <div className='flex justify-around items-center py-10'>
              <Link to="/posts">
                  <img src="https://www.postplanner.com/hubfs/what-to-post-on-instagram.png" className='' width={500} alt="" />
                  <p className='text-center text-xl font-semibold py-2'>Posts</p>
              </Link>
              <br />
              <Link to="/users">
                  <img src="https://www.tech101.in/wp-content/uploads/2019/07/software-users.png" width={500} alt="" />
                  <p className='text-center text-xl font-semibold py-2'>Users</p>
              </Link>
          </div>
    </div>
  )
}

export default Home

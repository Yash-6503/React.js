import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Projects() {
  const projects = [
    {
      id: 1101,
      image: "https://www.logicraysacademy.com/blog/wp-content/uploads/2023/03/rp7.jpg",
      name: "Music App"
    },
    {
      id: 5522,
      image: "https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/screenshot.png",
      name: "Whether App"
    },
    
    {
      id: 1211,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-wall-of-movie-posters-on-display-image_2949343.jpg",
      name: "Movie App"
    },

    {
      id: 1551,
      image: "https://www.capconnect.com/blog/wp-content/uploads/2021/11/site-ecommerce.jpg",
      name: "E-Commerce App"
    },
  ]

  localStorage.setItem('projects',JSON.stringify(projects))  

  return (
    <div className='box '>
      <h1 className='text-2xl font-extrabold' >Projects Page</h1>
    <div className=' max-w-7xl flex justify-around items-center flex-wrap gap-10'>
      {
        projects.map((v, i) => (
          <div key={i} className='w-70 sm:w-90  border rounded-2xl '>
            <img src={v.image} alt={v.name} className=' aspect-auto object-contain' />
            <Link to={`/project/${v.id}`} className=''>
              <h2>{v.name}</h2>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Projects

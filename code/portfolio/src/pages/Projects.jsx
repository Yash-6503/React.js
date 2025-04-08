import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Projects() {
  const projects = [
    {
      id: 1101,
      image: "https://www.logicraysacademy.com/blog/wp-content/uploads/2023/03/rp7.jpg",
      name: "Music App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Netlify & GitHub",
      weblink: "www.xyz.com",
      sourceCode: "github.com/Yash-6503",
    },
    {
      id: 5522,
      image: "https://raw.githubusercontent.com/alexkowsik/react-weather-app/master/src/images/screenshot.png",
      name: "Whether App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Netlify & GitHub",
      weblink: "www.xyz.com",
      sourceCode: "github.com/Yash-6503"
    },
    
    {
      id: 1211,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-wall-of-movie-posters-on-display-image_2949343.jpg",
      name: "MovieFlix – ReactJS Movie App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Netlify & GitHub",
      weblink: "www.xyz.com",
      sourceCode: "github.com/Yash-6503",
    },

    {
      id: 1551,
      image: "https://www.capconnect.com/blog/wp-content/uploads/2021/11/site-ecommerce.jpg",
      name: "E-Commerce App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Netlify & GitHub",
      weblink: "www.xyz.com",
      sourceCode: "github.com/Yash-6503",
    },
    {
      id: 6503,
      image: "https://portfolio-yashwalke.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio.b24cd3cd.jpg&w=1920&q=75",
      name: "Portfolio App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Vercel & GitHub",
      weblink: "https://portfolio-yashwalke.vercel.app/",
      sourceCode: "github.com/Yash-6503/Portfolio-Project",
    },
    {
      id: 5001,
      image: "https://portfolio-yashwalke.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcalculator.d9cabf35.jpg&w=640&q=75",
      name: "Calculator App",
      frontend: "ReactJS, JavaScript, HTML5, CSS3, TailwindCSS",
      APIs: "TMDb(The Movie Database API)",
      StateManagement: "React Hooks(useState, useEffect, optional: useContext, useReducer)",
      Routing: "React Router DOM",
      Styling: "Tailwind CSS / Custom CSS",
      Deployment: "Vercel & GitHub",
      weblink: "https://yashcalc.netlify.app/",
      sourceCode: "https://github.com/Yash-6503/Calculator-Project",
    }
  ]

  localStorage.setItem('projects',JSON.stringify(projects))  

  return (
    <div className='box '>
      <h1 className='text-2xl font-extrabold' >Projects Page</h1>
    <div className=' max-w-7xl flex justify-around items-center flex-wrap gap-10'>
      {
        projects.map((v, i) => (
          <div key={i} className=' rounded-2xl '>
            <img src={v.image} alt={v.name} className='w-90 rounded-2xl aspect-auto object-contain' />
            <Link to={`/project/${v.id}`} className=''>
              <h2 className='text-lg font-semibold' style={{ padding: '5px 0px' }}>{v.name}</h2>
            </Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Projects

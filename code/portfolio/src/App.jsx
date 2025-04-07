import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import './App.css'
import React from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className=' flex-col justify-center text-center mt-10'>
      <Header />
      <Routes>
        <Route
          path=''
          Component={Home}></Route>
        <Route
          path='about'
          Component={About}></Route>
        <Route
          path='projects'
          Component={Projects}></Route>
        <Route
          path='contact'
          Component={Contact}></Route>
        <Route
          path='project'
          Component={Project}></Route>
        <Route path="/project/:id" Component={Project} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App

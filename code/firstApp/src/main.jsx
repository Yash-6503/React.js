import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from './components/Header.jsx';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Header />
  </StrictMode>,
)

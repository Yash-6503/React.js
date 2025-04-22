import Posts from "./components/Posts";
// import { Link } from 'react-router-dom'
import Post from "./components/Posts";
import { Route, Routes } from 'react-router-dom'
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <>

      <Routes>
        <Route path='/posts' Component={Post}></Route>  
        <Route path='/users' Component={Users}></Route>
        <Route path='/' Component={Home}></Route>
        <Route path='/products' Component={Products}></Route>
        <Route path='/user/:id' Component={User}></Route>
        <Route path='/product/:id' Component={Product}></Route>
        <Route path='*' Component={NotFound}></Route>
      </Routes>
    </>
  );
}

export default App;

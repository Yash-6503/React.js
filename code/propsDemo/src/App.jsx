import React from 'react'
import Book from './Book'
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';

function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Header />
      <Message/>
      <div className='container'>
        <Book name="Java" imgLink="java.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="Python" imgLink="python.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="Javascript" imgLink="js.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="React" imgLink="react.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="HTML" imgLink="html.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="CSS" imgLink="css.jpeg" >
          <button>Add to cart</button>
        </Book>
        <Book name="Angular" imgLink="angular.png" >
          <button>Add to cart</button>
        </Book>
        <Book name="MySQL" imgLink="sql.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="Spring Boot" imgLink="sb.png" >
          <button>Add to cart</button>
        </Book>
        <Book name="AWS" imgLink="aws.jpg" >
          <button>Add to cart</button>
        </Book>
        <Book name="MongoDB" imgLink="mongodb.jpeg" >
          <button>Add to cart</button>
        </Book>
        <Book name="Nodejs" imgLink="node.jpg" >
          <button>Add to cart</button>
        </Book>
      </div>

      <Footer/>
    </div>
  )
}

export default App

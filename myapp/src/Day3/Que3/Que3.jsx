import React from 'react'
import Links from './Links'
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import { Link } from 'react-router-dom';
const Que3 = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
      <Link to='/'>Home</Link>
      </li>
      <li>
      <Link to='/about'>About</Link>
      </li>
      </ul>
      </nav>
    </div>
  )
}

export default Que3

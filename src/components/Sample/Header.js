import React from 'react'  
import { Link } from 'react-router-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom' 

function Header() {
  return (
    <header>
        <Router>
      <nav>
        <ul>
          <li><Link to='/'>Roster</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
      </Router>
    </header>
  );
}

export default Header
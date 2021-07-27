
//
import React from 'react'  
import Dashboard from './components/Router/Dashboard'
// import About from './components/Router/About'
import Roster from './components/Router/Roster'
import Contact from './components/Router/Contact'

import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import App from './App'


function App() {
  return (
      
        <Router>
        <div className="App">
          {/* <NavLink activeClassName="active" to="/Contact">Dashboard</NavLink> */}
        <hr/>
        
          <Switch>
              <Route path="/" component={Dashboard} exact />
              <Route path="/Contact" component={Dashboard} />
              <Route path="/Dashboard" component={Dashboard} />
              <Route component={Error} />
          </Switch>
          </div>
          </Router>
     
  ) 
}
export default App  


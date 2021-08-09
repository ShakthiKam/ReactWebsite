

import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homefile from "./components/Router/Homefile"
import Couple from "./components/Router/Couple"
import Individual from './components/Router/Individual'
import Enrollment from './components/Router/Enrollment'

import "./App.css"


function App() {
  return (
      
    <Router>
   <Switch>
     <Route exact path="/" component={Homefile}/>
     <Route exact path={'/individual'} component={Individual}/>
     <Route exact path={"/Couple"} component={Couple}/>
     <Route exact path={"/enrollment"} component={Enrollment}/>
     {/* <Route exact path={'/individual'} component={Individual}/> */}

   </Switch>

      </Router>
     
   

     
  ) 
}
export default App  


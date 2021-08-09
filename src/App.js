

import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homefile from "./components/Router/Homefile"
import Couple from "./components/Router/Couple"
import Individual from './components/Router/Individual'
import Enrollment from './components/Router/Enrollment'
import Aboutapp from './components/Router/Aboutapp'
import Schedule from './components/Router/Schedule'
import Emailconfirmation from "./components/Router/Emailconfirmation";
import Confirm from "./components/Router/Confirm"
import Selfcare from "./components/Router/Selfcare"
import Selfcareactivities from "./components/Router/Selfcareactivities"
import Resources from "./components/Router/Resources"


import "./App.css"



function App() {
  return (
      
    <Router>
   <Switch>
     <Route exact path="/" component={Homefile}/>
     <Route exact path={'/individual'} component={Individual}/>
     <Route exact path={"/Couple"} component={Couple}/>
     <Route exact path={"/enrollment"} component={Enrollment}/>
     <Route exact path={"/aboutapp"} component={Aboutapp}/>
     <Route exact path={"/schedule"} component={Schedule}/>
     <Route exact path={"/emailconfirmation"} component={Emailconfirmation}/>
     <Route exact path={"/confirm"} component={Confirm}/>
     <Route exact path={"/selfcare"} component={Selfcare}/>
     <Route exact path={"/selfcareactivities"} component={Selfcareactivities}/>
     <Route exact path={"/resources"} component={Resources}/>
     <Route exact path={"/homefile"} component={Homefile}/>
 
 

   </Switch>

      </Router>
     
   

     
  ) 
}
export default App  


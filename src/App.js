

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
import Payment from "./components/Router/Payment"
import Employers from "./components/Router/Employers"
import Depression from "./components/Router/Depression"

import "./App.css"
import Anxiety from "./components/Router/Anxiety";
import Panicdisorder from "./components/Router/Panicdisorder";
import Posttraumatic from "./components/Router/Posttraumatic";
import Bipolar from "./components/Router/bipolar";
import Other from "./components/Router/Other";



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
     <Route exact path={"/payment"} component={Payment}/>
     <Route exact path={"/employers"} component={Employers}/>
     <Route exact path={"/depression"} component={Depression}/>
     <Route exact path={"/anxiety"} component={Anxiety}/>
     <Route exact path={"/panicdisorder"} component={Panicdisorder}/>
     <Route exact path={"/posttraumatic"} component={Posttraumatic}/>
     <Route exact path={"/bipolar"} component={Bipolar}/>
     <Route exact path={"/other"} component={Other}/>
 
 

   </Switch>

      </Router>
     
   

     
  ) 
}
export default App  


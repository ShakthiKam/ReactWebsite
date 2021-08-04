import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  

import './index.css';   
import Individual from './components/Router/Individual';
import Couple from './components/Router/Couple';
import Enrollment from './components/Router/Enrollment';
import Aboutapp from './components/Router/Aboutapp';
// import Homefile from './components/Home';
import Homefile from './components/Router/Homefile';
import Home1 from './components/Router/Home1';
// import Header from './components/Router/Header';
import App from './App';



ReactDOM.render(<Individual/>,document.getElementById('root'));

//
import React ,{useState}from 'react';  
import Image from 'react-image-resizer';
import river from './river.png'
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom'
// import "./center.css"

import About from './components/About.js'  
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends React.Component {
  render(){
    return (


        <div>
      
        <div className="center"> 
        <img src={river} alt="river" style={{height:"710px", width:"1370px", position:"center",verticalAlign: "center",
           marginLeft:"-2%",marginTop:"-2%"}}/>  
    
        <div>
               <h2 style={{textAlign:"center", fontSize:35, marginTop:"-51%", color:"white",marginLeft:"-76%" }}>Wellness</h2> 
               <h2 style={{color:"white", marginLeft:"72%",marginTop:"-4%"}}>Free Counseling</h2>
               <h2 style={{color:"white", marginLeft:"86%",marginTop:"-3.7%"}}>Login</h2>
               </div>
               
        <p style={{color:"white",fontSize:60,marginLeft:"7%",marginTop:"5%"}}>Get Well, Stay Well</p>
        
       
         <div>
         <header>
             <h1 style={{marginTop:20,color:"white",marginTop:"-3%",marginLeft:"7%",fontSize:25}}>We want to be your companion,<br></br>helping you to achieve your mental,<br></br>emotional, and life goals.</h1>
         </header>
        </div>
        <div>
          <ul>
         
         <Router>
          <nav>
          <ul>
            
          {/* <li><Link to="/About">About</Link></li> */}
         
          </ul>
          <li className="links-list">
          {/* <Link to="/About">About</Link>  */}
          <Route path ="/About" className="links" />
            <button style={{color:"white",backgroundColor:"#0693E3", height:40, width:200,fontSize:18,marginBottom:"1%",marginTop:"3%",
             borderRadius:20,marginLeft:"4%"}}>Individuals</button>  
           
            </li>

            <li>
              <button style={{color:"white",backgroundColor:"#0693E3",height:40, width:200,fontSize:18,marginBottom:"1%",
            borderRadius:20,marginLeft:"4%"}}>Couples</button>
            </li>
            <li>
            <button style={{color:"white",backgroundColor:"#0693E3",height:40, width:200,fontSize:18,marginBottom:"1%",
             borderRadius:20,marginLeft:"4%"}}>Employers</button>
            </li>
                 
            {/* <Route path="/About" component={About} />  */}
          
            </nav>
            </Router>
          </ul>
        </div>
        </div>
        </div>
    );
  }
}

export default Home;
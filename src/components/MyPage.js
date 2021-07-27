import React from 'react';
// import Image from 'react-image-resizer';
import Rose from './Rose.png'

class MyPage extends React.Component {
  render(){
    return (
   
        <div>
          <h2 style={{color:"black",textAlign:"center", fontSize:60 }}>Welcome to our page</h2>
          <h2 style={{color:"purple",textAlign:"center", fontSize:50,marginTop:"-3%" }}>Hiiiiiiii</h2>
        <div class="center">
          <img src={Rose} alt="Rose" style={{height:"300px", width:"300px", position:"center",verticalAlign: "center",
           marginLeft:"39%",marginTop:"-2%"}}/></div>
        <button onClick ={() => {alert('Hellooooo');}} style={{marginLeft:"44%",height:30,width:150, fontSize:15,marginTop:"2%",backgroundColor:"blue",color:"white"}}>Click here</button>
        
        </div>
    );
  }
}

export default MyPage;
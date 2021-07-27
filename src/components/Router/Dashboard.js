import React ,{useState}from 'react';  
import {Redirect} from 'react-router-dom';

const Dashboard = () => {
    const [isAuth, setIsAuth] = useState(true);

    if(!isAuth) {
        return<Redirect to = "/Contact"/>
    }
    return <div>
        <h3>Welcome to Dashboard Page</h3>
        <button onClick={() => setIsAuth(false)}>Logout</button><br/>
        <div>isAuth: {isAuth.toString()}</div>
    </div>
}
export default Dashboard;

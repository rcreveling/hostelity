import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/login';
import Map from './components/map';
import Signup from './components/signup';
import Home from './components/Home';
import Navbar from './components/subcomponent/Navbar';
import "./css/style.css";
import SearchModal from "./components/subcomponent/searchModal";
import Axios from 'axios';
import NoMatch from './components/noMatch';

function App() {
    // Define hooks (state) variables
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    // Define callback 
    const loginCallback = (user) => {
        console.log(`running loginCallback`);
        setLoggedIn(user.isLoggedIn);
        setUserId(user.id);
        
    }
    const isLoggedIn = () => {
        console.log(`Checking if logged in`);
        if (!userId){
            Axios.get('/api/users')
            .then(response => {
                console.log(response.data.passport);
                if (response.data.passport.user){
                    console.log("setting user ID state");
                    setUserId(response.data.passport.user);
                }
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log(`User signed in with id ${userId}`);
        }
    }
    isLoggedIn();
  return (
    <Router>
      <div>

      <Navbar 
        loginCallback={loginCallback} 
        isLoggedIn={loggedIn}
        userId={userId}
      />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" render={(props) => <Home {...props} userId={userId}/>} />
          <Route exact path="/searchModal" component={SearchModal} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

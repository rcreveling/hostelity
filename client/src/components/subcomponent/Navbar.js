import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {
    const logOut = event => {
        event.preventDefault();
        console.log('logging out');
        Axios.get('/api/users/logout')
        .then(function(res){
            console.log(res);
            // setLoggedIn(false);
            props.loginCallback({
                isLoggedIn: false,
                id: null
            })
            window.location = "/login";
        })
        .catch(function(err){
            console.log(err);
        })
    }
    return (
        <nav className="nav wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    switchBak 
                </Link>
                { props.userId 
                    ?<ul className="right">
                        <li key="home"><NavLink to='/home'> Home </NavLink> </li>
                        <li key="newTrip"><NavLink to='/searchModal'>New Trip</NavLink></li>
                        <li key="logOut"><NavLink to='#' onClick={logOut}>Log Out</NavLink></li> 
                        <li key="avatar"><NavLink to='/' className='btn btn-floating red lighten-1'></NavLink></li>
                    </ul>
                    :<ul className="right">
                        <li key="signIn"><NavLink to='/login'> Sign in </NavLink> </li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar;
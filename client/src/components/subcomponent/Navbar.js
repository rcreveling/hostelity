import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    const logOut = event => {
        event.preventDefault();
        console.log('logging out');
        Axios.get('/api/users/logout')
            .then(function (res) {
                console.log(res);
                // setLoggedIn(false);
                props.loginCallback({
                    isLoggedIn: false,
                    id: null
                })
                window.location = "/login";
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    return (
        <nav className="nav navTop navBottom">
            <div className="navLinks">
                {props.userId
                    ? <ul className="nav">

                        <li key="home"><Link to='/home'><i className="material-icons">home</i></Link></li>

                        <li key="newTrip"><Link to='/map'><i className="material-icons">search</i></Link></li>

                        <li key="my-trips"><Link to='/my-trips'><i className="material-icons">airport_shuttle</i></Link></li>

                        <li key="logOut"><Link to='#' onClick={logOut}><i className="material-icons">exit_to_app</i></Link></li>

                    </ul>

                    : <ul className="loggedOutLinks">
                        <li key="signIn"><Link to='/login'> Sign in </Link> </li>
                    </ul>

                }
            </div>
        </nav>
    )
}

export default Navbar;
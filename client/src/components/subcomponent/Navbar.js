import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const Navbar = (props) => {
    const logOut = event => {
        event.preventDefault();
        console.log('logging out');
        Axios.get('/auth/users/logout')
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
        <Grid container>
        <Grid item xs={12}>
        <nav className="nav navTop navBottom">
            <div className="navLinks">
                {props.userId
                    ? <ul className="nav">

                        <li key="home"><Link to='/home'><i className="material-icons" style={{ fontSize: 30 }}>home</i></Link></li>

                        <li key="newTrip"><Link to='/map'><i className="material-icons" style={{ fontSize: 30 }}>search</i></Link></li>

                        <li key="my-trips"><Link to='/my-trips'><i className="material-icons" style={{ fontSize: 30 }}>airport_shuttle</i></Link></li>

                        <li key="logOut"><Link to='javascript:;' onClick={logOut}><i className="material-icons" style={{ fontSize: 30 }}>exit_to_app</i></Link></li>


                    </ul>

                    : <ul className="loggedOutLinks">
                        <li key="signIn"><Link to='/login'> Sign in </Link> </li>
                    </ul>

                }
            </div>
        </nav>
        </Grid>
        </Grid>
    )
}

export default Navbar;
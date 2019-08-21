import React, { useState } from 'react';
import Trips from './subcomponent/Trips';
import Axios from 'axios';

const Home = (props) => {
    const [trips, setTrips] = useState([]);
    console.log(`Home component w/ user id ${props.userId}`);
    const getTrips = (userId) => {
        if (!trips.length){
            Axios.get(`/api/trips/${userId}`)
            .then(response => {
                console.log(response.data);
                setTrips(response.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    getTrips(props.userId);
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <Trips 
                        trips={trips}
                    />
                    <div className="col s12 m5.offset-m1">
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Home;

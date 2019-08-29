import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hostels from './Hostels';

const wpIndex = ["Starting point:", "Waypoint:", "Ending point:"]

const Waypoints = (props) => {
    console.log(props);
    return (
        <div className="tripList section">
            {props.waypoints.map((waypoint, i) => {
                console.log(waypoint);
                return (
                    <div key={waypoint._id} className="tripSummary">

                        <Typography variant="h6" gutterBottom>
                            {wpIndex[i]}
                         </Typography>
                    
                        <Typography component="p">
                            {waypoint.name}
                        </Typography>
                       

                        {/* <Typography variant="h6" gutterBottom>
                            Location: {waypoint.location[0]}, {waypoint.location[1]}
                        </Typography> */}

                        <Hostels hostels={waypoint.hostels} />
                       

                    </div>
                )
            })}
        </div>
    )
}

export default Waypoints;
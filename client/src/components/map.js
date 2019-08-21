import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import { makeStyles } from '@material-ui/core/styles';

const MarkerComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 9
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCiZ-jsILS_LD8OOFCvlybQvnvyjb1jtaQ' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MarkerComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
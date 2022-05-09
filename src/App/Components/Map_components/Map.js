import React from "react";
import GoogleMapReact from 'google-map-react'

import { MapPins } from "./MapPins";

export function Map(props) {

    // const ref = React.useRef(null);
    // const [map, setMap] = React.useState();

    const landpads = props.data.landpads? props.data.landpads.docs : [];
    const launchpads = props.data.launchpads? props.data.launchpads.docs : [];

    // console.log(landpads);
    // console.log(launchpads);

    // React.useEffect(() => {
    //     if (ref.current && !map) {
    //       setMap(new window.google.maps.Map(ref.current, {}));
    //     }
    //   }, [ref, map]);

    // Initialize and add the map


 
    return ( 
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={[0, 0]}
                defaultZoom={0}
            >
                <MapPins data={{full_name: 'test'}} key={'a1'} type={'launchpad'} lat={0} lng={0} text={'test'}/>
            </GoogleMapReact>


            
        </div> 
    );
}

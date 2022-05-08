import React from "react";

import { MapPins } from "./MapPins";

export function Map(props) {

    const landpads = props.data.landpads? props.data.landpads.docs : [];
    const launchpads = props.data.launchpads? props.data.launchpads.docs : [];

    // console.log(landpads);
    // console.log(launchpads);

    return ( 
        <div className="map">
            <h2>Map</h2>
            {landpads.map(pad => <MapPins data={pad} key={pad.id} type={'landpad'}/>)}
            {launchpads.map(pad => <MapPins data={pad} key={pad.id} type={'launchpad'}/>)}
        </div> 
    );
}

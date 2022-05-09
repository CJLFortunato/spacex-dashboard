import React, { useState } from "react";
import GoogleMapReact from 'google-map-react'

import { MapPins } from "./MapPins";

export function Map(props) {

    const [ center, setCenter] = useState({lat: 28, lng: -80});
    const [ zoom, setZoom ] = useState(0);


    const landpads = props.data.landpads? props.data.landpads.docs : [];
    const launchpads = props.data.launchpads? props.data.launchpads.docs : [];

    return ( 
        <div className="map">

            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                defaultCenter={[28, -80]}
                defaultZoom={0}
                center={center}
                zoom={zoom}
                onChange={({ center, zoom }) => { setCenter(center); setZoom(zoom) }}
            >   
                {landpads.map(pad => <MapPins data={pad} key={pad.id} type={'landpad'} lat={pad.latitude} lng={pad.longitude}/>)}
                {launchpads.map(pad => <MapPins data={pad} key={pad.id} type={'launchpad'} lat={pad.latitude} lng={pad.longitude}/>)}
            </GoogleMapReact>


            
        </div> 
    );
}

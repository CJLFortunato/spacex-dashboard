import React from "react";

export function PinDetails(props) {

    const data = props.data;

    const color = data.type === 'landpad'? '#608df4' : '#f2587c';
    const style = { color: color};
    const type = data.type || '';

    const handleClose = () => {
        props.toggle();
    }


    return (
        <div className="pin-details">
            <button onClick={handleClose}><i className="fa-solid fa-times"></i></button>
            <h3>{data.full_name}</h3>
            <p><em>{data.locality}, {data.region}</em></p>
            <p style={style}>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
            <p>Lat: {data.latitude}, Lon: {data.longitude}</p>
            <p>Status: {data.status}</p>
        </div>
    );
}
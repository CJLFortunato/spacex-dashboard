import React from "react";

export function MapPins(props) {

    // console.log(props);

    const data = props.data;

    const color = props.type === 'landpad'? '#163fef' : '#ab132c';
    const style = { color: color};

  return (
      <div className="map-pin">
          <p style={style}><i className="fa-solid fa-location-dot"></i></p>
      </div>
  );
}
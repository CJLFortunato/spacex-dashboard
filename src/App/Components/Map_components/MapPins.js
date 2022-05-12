import React from "react";

export function MapPins(props) {

    const data = props.data;
    const collectData = props.collect;


    const color = props.type === 'landpad'? '#163fef' : '#ab132c';
    const style = { color: color};

    const handleClick = () => {

        const dataWithType = { ...data, type: props.type }
        collectData(dataWithType);
        props.toggle();
    }

  return (
      <div className="map-pin" onClick={handleClick}>     
          <p style={style}><i className="fa-solid fa-location-dot"></i></p>
      </div>
  );
}
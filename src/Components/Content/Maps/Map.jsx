import React, { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";


const mapStyle={
    height:"500px",
    width:"500px"
}
const defaultOptions = {center:{lat:-34.58823325530837, lng:-58.44504377444529},zoom:11};
function Map({options=defaultOptions,children}){
    const mapref = useRef(null);
    const [map, setMap] = useState();

    useEffect(()=>{
        if(mapref.current && !map){
            setMap(new window.google.maps.Map(mapref.current,{options}));
        }

    },[mapref,map]);

    return(
        <>
        <div ref={mapref} id="map" style={mapStyle}></div>
        {Children.map(children,(child)=>{
            if(isValidElement(child)){
                return cloneElement(child,{map});
                
            }
        })}
        </>
    );

}

export default Map;
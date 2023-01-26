import React, { useEffect, useState } from "react";
import { Loader } from "google-maps";
import { apiKey } from "../../Comunications/Private";
import InfoWindows from "./InfoWindows";

function Marker({instancia,position,map,zoom}){
    const [marker,setMarker] = useState();
    const [info,setInfo] = useState();

    useEffect(()=>{
        if(!marker){
           setMarker(new instancia.maps.Marker())
            setInfo(new instancia.maps.InfoWindow())
        }

        return ()=>{
            if(marker){
                marker.setMap(null);
            }
        };
    },[marker]);

    useEffect(()=>{
        
        if(marker){
            map.setZoom(zoom);
            map.setCenter(position);
            marker.setMap(map)
            marker.setPosition(position);
            info.open({anchor:marker,shouldFocus:true})
            info.setContent("hello mami")
        }
        
    })

    return null;
};

export default Marker;
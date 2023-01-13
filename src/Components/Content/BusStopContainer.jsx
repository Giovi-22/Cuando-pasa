import React, { useState } from "react";

import BusStop from "./BusStop";
import { getBusByStop } from "../../Utils/Functions";



const BusStopContainer = ()=>{
        const [busStops,SetBusStops] = useState([]);


        function consultarParada(stopId){
            getBusByStop(stopId)
            .then(result =>SetBusStops(result.data))
            .catch(error =>console.log(error));
        }

    return (
        <>
        <BusStop consultar={consultarParada}/>
        <ul>
            {busStops.length === 0 ? null: busStops.map(element=><li key={element._id}>label {element._vehicle._vehicle._label}</li>)}
        </ul>
        </>
    );
}

export default BusStopContainer;
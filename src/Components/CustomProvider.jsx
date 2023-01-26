import React, { createContext, useState } from "react"


export const context = createContext();
const { Provider } = context;

function CustomProvider({children}){
    const [busLine,setBusLine] = useState("");
    const [stopId,setStopId] = useState();
    const [vehicle,setVehicle] = useState({});
    const [stops,setStops] = useState([]);
    const [lines,setLines]= useState([]);
    
    const handleLines = (lines)=>{
        setLines(lines);
    }
    const handleBusLine = (busline)=>{
        setBusLine(busline);
    }
    const handleStopId = (stopid)=>{
    setStopId(stopid);
    }
    const handleStops = (stops)=>{
        setStops(stops);
    }
    const handleVehicle = (data)=>{
        setVehicle(data);
    }
    
    let valorDelContexto = {
                    setLines:handleLines,
                    setBusLine:handleBusLine,
                    setStopId:handleStopId,
                    setVehicle:handleVehicle,
                    setStops:handleStops,
                    lines:lines,
                    stopId:stopId,
                    busLine:busLine,
                    vehicle:vehicle,
                    stops:stops
            };



    return(
            <Provider value={valorDelContexto} >
                {children}
            </Provider>

    );
}

export default CustomProvider;

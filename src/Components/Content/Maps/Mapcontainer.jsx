import React, { useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { apiKey } from "../../Comunications/Private";
import Map from "./Map";
import Marker from "./Marker";
import Mapa2 from "./Mapa2";

const render = ()=>{
    if(Status.LOADING) return <h3>cargando</h3>
    if(Status.FAILURE) return <h3>Fallo la carga</h3>
    return <h3>Carga completada con exito</h3>
}

function Mapcontainer({marker=false,markerZoom=5}){
    const [zoom,setZoom]=useState(markerZoom)
    const [instancia,setInstancia] = useState();
const options={ 
                center:{
                    lat: -34.825413,
                    lng: -58.390406
                        },   
                zoom: zoom
            }
const parada ={
                lat: -34.946159, 
                lng: -57.908691
            }

const mapStyle={
    width:"500px",
    height: "500px"
}
function handleCallback(data,loader){
    if(data === "SUCCESS"){
        loader.load()
        .then(result => setInstancia(result))
        .catch(error =>console.log(error)); 
        
    }
}
useEffect(()=>{
    setZoom(markerZoom);
},[markerZoom])
    return(
        <Wrapper render={render} apiKey={apiKey} callback={handleCallback}>
            <Map options={options}>
                {marker && <Marker instancia ={instancia} position={parada} zoom={17} />}
            </Map>
        </Wrapper>
    );
}

export default Mapcontainer;
/*
<Wrapper render={render} apiKey={apiKey}>
            <Map options={options}>
                {marker && <Marker options={parada} />}
            </Map>
        </Wrapper>
*/
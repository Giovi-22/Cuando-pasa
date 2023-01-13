import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { findByLabelText } from "@testing-library/react";

const boxStyle={
            marginTop:"10px",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
}
const buttonStyle={
    marginLeft:"10px",
    height:"30px"
}

const BusStop = ({consultar})=>{
    const [stopId,setStopId] = useState("");

    function handleChange(event){
        const {value} = event.target;
        setStopId(value);
    }
    function handleClick(){
        consultar(stopId);
    }
    return (
        <Box sx={boxStyle}>
            <TextField id="parada" label="Parada N°" variant="outlined" value={stopId} onChange={handleChange}/>
            <Button sx={buttonStyle} variant="outlined" onClick={handleClick}>CONSULTAR</Button>
        </Box>

    );
}

export default BusStop;
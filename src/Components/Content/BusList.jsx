import React, { useState } from "react";
import { InputLabel, MenuItem, Select, Box } from "@mui/material";


const BusList = ({buslist=[]})=>{
    const [busLine,setBusLine] = useState("");

    function handleChange(event){
        const {value} = event.target;
        setBusLine(value)
    }

    return (
        <Box className="bus-list">
            <InputLabel id="bus-select">Bus Line</InputLabel>
            <Select
                labelId="bus-select"
                value={busLine}
                label="Busline"
                onChange={handleChange}
                className="bus-selectStyle"
            >
            {buslist.map((dato,index)=><MenuItem key={index} value={index}>{dato}</MenuItem>)}    
            </Select> 
        </Box>
            );
            
        }
export default BusList;
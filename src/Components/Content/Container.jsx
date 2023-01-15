import React, { useState } from "react";
import { Box } from "@mui/material";

import BusList from "./BusList";
import BusStopContainer from "./BusStopContainer";

const Container = ({datos=[]})=>{
    const [lineas,setLineas]=useState([]);

    return(
        <Box className="main-container">
            <BusList buslist={datos}/>
            <BusStopContainer />
        </Box>

    );

}

export default Container;
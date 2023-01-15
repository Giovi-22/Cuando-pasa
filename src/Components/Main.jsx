import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Container from "./Content/Container";
import Informacion from "./Content/Informacion";
import { getBusLines } from "../Utils/Functions";

const Main  = ()=>{
    const [lines,setLines] = useState([]);

    useEffect(()=>{
        getBusLines()
        .then(result => setLines(result.data))
        .catch(error => console.log(error));
    },[]);

    return(
        <Box className="app-main">
            <Container  datos={lines}/>
            <Informacion />
        </Box>
    );
}

export default Main;
import React from "react";
import { Box } from "@mui/system";
import Container from "./Content/Container";
import Informacion from "./Content/Informacion";


const Main  = ()=>{

    return(
        <Box className="app-main">
            <Container  />
            <Informacion />
        </Box>
    );
}

export default Main;
import { Box } from "@mui/material";
import React from "react";
const Feature=({feature})=>{
    return(
        <Box
        sx={{
             marginBottom:"1rem",
               marginTop:"1rem"
        }}>
            <img src="https://preview.colorlib.com/theme/onedu/assets/img/icon/tick.svg" alt="" sx={{marginRight:"1rem"}}/>
            {feature}
        </Box>
    );

}
export default Feature;
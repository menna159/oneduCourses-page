import React from "react";
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';
const ImageCard=({image,title})=>{
  const [checked, setChecked] = React.useState(false);
    return(
      <Box
      sx={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      height: "25vh",
      width:"20vw",
      textAlign:"center",
      color:"white",
      fontWeight:"bold",
      display:"flex",
      flexDirection: 'column',
      justifyContent: 'center' ,
      alignItems:"center",
      marginBottom:"1.5rem",
      
      }}
    > 
  {title}

 {/* <Slide direction="up" in={false} mountOnEnter unmountOnExit sx={{width:"50vw"}}  className="slide"> */}
 <Button variant="contained" sx={{bottom:"0px",bgcolor: 'error.main' ,width:"11vw",
  "@keyframes change-color": {
    "0%": {
       bgcolor: 'error.main',
       color:"white"
    },
    "100%": {
       bgcolor: 'white',
       color:"error.main"
    }
},
  "&:hover": {
          animation:"change-color 1s ease infinite",
          animationFillMode: "forwards"
          },
 }}>View Courses</Button>
  {/* </Slide> */}

</Box>

    );
}
export default ImageCard;
import { Box} from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TextField from '@mui/material/TextField';
import {grey} from '@mui/material/colors';

const Footer=()=>{
    return(
        <Box sx={{bgcolor:"secondary.main",display:"flex",padding:"2rem",justifyContent:"space-evenly"}}>
        <Box sx={{display:"flex",flexDirection:"column",color:"white"}}>
         <Box sx={{width:"20vw"}}><img src="https://preview.colorlib.com/theme/onedu/assets/img/logo/logo2_footer.png" alt="" /></Box> 
          <Box sx={{width:"25rem"}}>The automated process starts as soon as your clothes go into the machine.</Box>
        <Box>
        <IconButton  aria-label="twitter" color="white">
        <TwitterIcon />
        </IconButton>
        <IconButton  aria-label="twitter" color="white">
        <FacebookOutlinedIcon />
        </IconButton>
        <IconButton  aria-label="twitter" color="white">
        <PinterestIcon />
        </IconButton>
        </Box>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <Box sx={{color:"white",fontWeight:"bold"}}>Subjects</Box>
          <Button  variant="text" style={{color:"#bdbdbd"}} >Design & creatives</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Telecommunication</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Restaurant</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Programing</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Architecture</Button>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <Box sx={{color:"white",fontWeight:"bold"}}>Community</Box>
          <Button  variant="text" style={{color:"#bdbdbd"}} >Design & creatives</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Telecommunication</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Restaurant</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Programing</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Architecture</Button>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <Box sx={{color:"white",fontWeight:"bold"}}>Company</Box>
          <Button  variant="text" style={{color:"#bdbdbd"}} >Design & creatives</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Telecommunication</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Restaurant</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Programing</Button>
          <Button  variant="text" style={{color:"#bdbdbd"}}>Architecture</Button>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"start"}}>
          <Box sx={{color:"white",fontWeight:"bold"}}>Newsletter</Box>
          <Box sx={{width:"15rem"}} style={{color:"#bdbdbd"}}>Subscribe our newsletter to get updates.</Box>
        <Box sx={{color:"white",marginBottom:"1rem",marginTop:"1rem"}}><TextField  label="Enter Your Email" variant="filled" /></Box>  
          <Button  variant="contained" color="error" sx={{fontWeight:"bold"}}>Subscribe</Button>
        </Box>
        </Box>
    );
}
export default Footer;
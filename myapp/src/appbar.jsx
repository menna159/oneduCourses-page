import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const navItems = ['Home', 'Browse courses', 'About','Blog','Contact'];
const MyAppBar=()=>{
 return(
    <AppBar component="nav" sx={{ bgcolor: "white" }} >
    <Toolbar>
      <Typography
      color="secondary"
        variant="h6"
        component="span"
        sx={{ display: { xs: 'none', sm: 'block' ,fontWeight:'bold'} }}

      >
        Onedu
      </Typography>
      <Paper
  component="form"
  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',
    borderRadius:"2rem",
    border:1,
    borderColor:"gray",
   width: 400 ,
   marginLeft: '2vw'}}
>
  <IconButton sx={{ p: '10px' }} aria-label="menu">
  
  </IconButton>
  <InputBase
    sx={{ ml: 1, flex: 1 }}
    placeholder="Search courses..."
    inputProps={{ 'aria-label': 'What do you want to learn?' }}
  />
  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
    <SearchIcon />
  </IconButton>
  
  <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
  
  </IconButton>
</Paper>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: 'black' }}> 
            {item}
          </Button>
        ))}
      </Box>
      
      <IconButton
sx={{
  alignSelf: 'center'
}}
>
<ShoppingCartIcon color="secondary"/>
</IconButton>
      <Button variant="contained" color="secondary">Sign in</Button>
    </Toolbar>
   
  </AppBar>
 );
}
export default MyAppBar;
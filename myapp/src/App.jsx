import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, createTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, Paper, Stack, TextField } from '@mui/material';
import CoursesCards from './coursescards';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MyAppBar from './appbar';
import Switch from '@mui/material/Switch';
const drawerWidth = 240;
import Slide from '@mui/material/Slide';
import ImageCard from './imagecard';
import Feature from './feature';
import Footer from './footer';
const navItems = ['Home', 'Browse courses', 'About','Blog','Contact'];
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff3e0"
    }
  }
});
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
   
  const container = window !== undefined ? () => window().document.body : undefined;
 const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(()=>{
    setTimeout(()=>{
      setChecked(true);
    },250)
    
   },[]);
   const styles=themes=>({
    ".image":{
      '&:hover': {
background: "rgb(7, 177, 77, 0.42)",    
             
}
    }
   })
  return (
    <Box >
      <CssBaseline />
     <MyAppBar/>
      <Box 
     sx={{
      backgroundSize: "cover",
      height: "90vh",
      width:"98vw",
      alignContent: 'center' ,
      display:"flex",
      
      position: 'relative'
     }}

    >
     
      <Box sx={{bgcolor: 'secondary.main',
        width:"50vw",
        
      }}>
          
      </Box>
       <Slide direction="left" in={checked} mountOnEnter unmountOnExit sx={{width:"40vw"}}>
       <img src="https://preview.colorlib.com/theme/onedu/assets/img/hero/h1_hero1.jpg" alt="" />
       </Slide>
       <Slide direction="up" in={checked}  mountOnEnter unmountOnExit>
        <Box sx={{ position:"absolute",zIndex: 'tooltip'}}>
          
        <Typography
          color="white"
            variant="h6"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',
               marginLeft: '20vw',
               fontWeight:'bold',
               width:'18rem',
               fontSize:"1.5rem",
               marginTop:"10rem"} }}

          >
            Learn new skills online with top educators 
          </Typography>
          <Typography
          color="white"
           
            component="span"
            sx={{ display: { xs: 'none', sm: 'block', marginLeft: '20vw',width:'25rem',fontSize:"1.2rem" } }}

          >
            Learn 100% online with world-class universities and industry experts
          </Typography>
       <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',
       width: 400 ,
       marginLeft: '20vw'}}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What do you want to learn?"
        inputProps={{ 'aria-label': 'What do you want to learn?' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
      
      </IconButton>
    </Paper>
    
        </Box>
        </Slide>
      
    </Box>
     {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
     <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',textAlign: 'center',fontWeight:'bold',marginTop:"3rem" ,fontSize:"2rem"} }}

          >
            The world's largest selection of courses
          </Typography>
          <Typography
          color="grey"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',textAlign: 'center',fontWeight:'bold' ,fontSize:"1rem"} }}

          >
            choose from 130,000 online video courses with new additional published every month
          </Typography>
          
      <CoursesCards/>
    <Stack direction="row" useFlexGap flexWrap="wrap" className='container' sx={{justifyContent: 'center'}}>
    <img src="https://preview.colorlib.com/theme/onedu/assets/img/gallery/about1.jpg" alt="" />
    <div style={{backgroundColor:'#d9fcfc',width:"50%"}}>
    <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',textAlign: 'start',fontWeight:'bold',marginTop:"3rem" ,fontSize:"2rem",marginLeft:"1rem"} }}

          >
            The world’s largest selection of online courses
          </Typography>
          <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',textAlign: 'start',marginTop:"3rem" ,fontSize:"1rem",marginLeft:"1rem"} }}

          >
              Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.
          </Typography>
          <Button variant="contained"  sx={{bgcolor:"secondary.main",marginLeft:"1rem",marginTop:"3rem",padding:"0.8rem",fontWeight:'bold'
            ,"@keyframes change-color2": {
    "0%": {
       bgcolor: 'secondary.main',
       color:"white"
    },
    "100%": {
       bgcolor: 'black',
       color:"white"
    }
},
  "&:hover": {
          animation:"change-color2 1s ease infinite",
          animationFillMode: "forwards"
          },
          }}>Browse Courses</Button>
    </div>
    </Stack>
    <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',textAlign: 'center',fontWeight:'bold',marginTop:"3rem" ,fontSize:"2rem"} }}

          >
           Student's are viewing
           {/* style={{backgroundColor:"#faeef5"}} */}
          </Typography>
          <CoursesCards/>
          <Box sx={{ display: 'flex',bgcolor:"#faeef5",
            justifyContent: 'space-evenly',
            flexWrap:"wrap",
            marginBottom:"3rem"}}>
               <IconButton>
       <ArrowBackIosIcon/>
       </IconButton>
       <Box sx={{ display: 'flex',
            alignItems: 'center',flexDirection: 'column' ,
            flexWrap:"wrap",}} >
               
                 <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none', sm: 'block',fontWeight:'bold',marginTop:"3rem" ,fontSize:"2rem"} }}

          >
           Students says about us
          </Typography>
        
          <p style={{ width: "516px" ,color:"grey"}}>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
         <Box sx={{ display: 'flex',
         flexWrap:"wrap",
            justifyContent: 'space-between',
            alignItems: 'center'
            ,marginBottom:"3rem"}}>
          <img src="https://preview.colorlib.com/theme/onedu/assets/img/gallery/founder-img.png" alt="" />
         <div style={{paddingLeft:"1rem"}}>
         <Box sx={{fontWeight:'bold'}}>
          Petey Cruiser
          </Box>
              <Box>Student at Onedu</Box>
          </div>
        
         </Box>
       </Box>
         <IconButton>
       <ArrowForwardIosIcon/>
       </IconButton>
       </Box>
       <Typography
          color="black"
            component="span"
            sx={{ display: { xs: 'none',textAlign:"center", sm: 'block',fontWeight:'bold',marginTop:"3rem" ,fontSize:"2rem"} }}

          >
           Explore top categoriesn
          </Typography>
          <Stack direction="row" useFlexGap flexWrap="wrap"  sx={{justifyContent: 'space-between',
            width:"90vw",
            marginLeft:"3rem",
          }} >
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories1.jpg" 
            title="Programming"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories2.jpg"
            title="VFX"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories3.jpg"
            title="App Development"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories4.jpg"
            title="Technology"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories5.jpg"
            title="Graphic Design"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories6.jpg"
            title="Music"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories7.jpg"
            title="Product Design"/>
            <ImageCard image="https://preview.colorlib.com/theme/onedu/assets/img/gallery/categories8.jpg"
            title="Video Editing"/>
         
         </Stack>
         <Box sx={{ display: 'flex',bgcolor:"#d9fcfc",
            justifyContent: 'space-evenly',
            flexWrap:"wrap",
            width:"98vw",
            padding:"2rem",
            marginBottom:"3rem"}}>
              <Box >
                <h1>Become an Instructor</h1>
                <Box sx={{width:"50vw"}}>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</Box>
              <Feature feature={"Techniques to engage effectively with vulnerable children and young people."}/>
              <Feature feature={"Join millions of people from around the world learning together."}/>
              <Feature feature={"Join millions of people from around the world learning together."}/> 
              <Box>
              <Button variant="contained" color="secondary"
              sx={{padding:"1rem",fontWeight:"bold",fontSize:"1rem",
                "@keyframes change-color3": {
                  "0%": {
                     bgcolor: 'secondary.main',
                     color:"white"
                  },
                  "100%": {
                     bgcolor: 'black',
                     color:"white"
                  }
              },
                "&:hover": {
                        animation:"change-color3 1s ease infinite",
                        animationFillMode: "backwards"
                        },
              }}>Become a Instructor</Button>
              <Button variant="text" color="error" sx={{fontWeight:"bold"}}>
               <Box sx={{marginRight:"0.5rem"}}>
               <img src="https://preview.colorlib.com/theme/onedu/assets/img/icon/play-button.svg" alt="" 
                /></Box> 
               <Box sx={{fontSize:"1rem",fontWeight:"bold"}}>Watch Video</Box> </Button>
                </Box>   
              </Box>
              <img src="https://preview.colorlib.com/theme/onedu/assets/img/gallery/about2.jpg" alt=""
              sx={{width:"50vw"}} />
            </Box>
            <Footer/>
    </Box>
     
    
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;

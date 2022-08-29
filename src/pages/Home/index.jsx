import "../Home/home.css";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import logo from '../../assets/img/logo.PNG';
import phone from '../../assets/img/Phone.png';




const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar className="appBar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            style={{ backgroundColor: '#B3B3B3'}}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            // style={{ width: '5px'}}
            >
            <img src={logo} style={{width:"15%",height:"50px",position:"absolute",top:"10px"}} /></Typography>
        
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"24%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> Main</Typography></a>
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"29%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> Catalog</Typography></a>
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"35.4%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> About Us</Typography></a>
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"42.5%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> Special Offer</Typography></a>
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"52%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> Reviews</Typography></a>
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",left:"59%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> Contacts</Typography></a>

          <img src={phone} style={{width:"1.5%",position:"absolute",right:"15%"}} />
          <a><Typography variant="subtitle1" gutterBottom style={{ position:"absolute",right:"5%",top:"20px",color:"gray",cursor:"pointer",fontSize:"15px"}}> +94 774 914 870</Typography></a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

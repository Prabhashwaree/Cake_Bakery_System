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
import mainPic from '../../assets/img/mainBackground.jpg';
import caketoOrder from '../../assets/img/caketoOrder.PNG';
import Button from '@mui/material/Button';

import cake1 from '../../assets/img/cake1.jpg';
import cake2 from '../../assets/img/cake2.jpg';
import cake3 from '../../assets/img/cake3.jpg';
import cake4 from '../../assets/img/cake4.jpg';
import cake5 from '../../assets/img/cake5.jpg';
import cake6 from '../../assets/img/cake6.webp';

import bery from '../../assets/img/bery1.webp';
import bakery from '../../assets/img/bakery.jpg';

import $ from 'jquery';





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

$(document).on('click', '.cakeCatogary-filter li', function () {
  $(this).addClass('cakeCatogary-filter-active').siblings().removeClass('cakeCatogary-filter-active')
})

$(document).ready(function () {
  $('.list').click(function () {
    const val = $(this).attr('data-filter');
    if (val == 'all') {
      $('.cake-box').show('1000');
    } else {
      $('.cake-box').not('.' + val).hide('1000');
      $('.cake-box').filter('.' + val).show('1000');
    }
  })
})

export default function HomePage() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar className="appBar">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              style={{ backgroundColor: '#B3B3B3' }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            // style={{ width: '5px'}}
            >
              <img src={logo} style={{ width: "15%", height: "50px", position: "absolute", top: "10px" }} />
            </Typography>
            {/* <h6 className="delicious"style={{ position:"absolute",top:"11px",left:"8%",color:"#b44151",cursor:"pointer",fontSize:"34px",fontFamily:"Meow Script, cursive;"}}> Cake Bakery</h6> */}

            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "24%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> Main</Typography></a>
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "29%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> Catalog</Typography></a>
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "35.4%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> About Us</Typography></a>
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "42.5%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> Special Offer</Typography></a>
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "52%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> Reviews</Typography></a>
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", left: "59%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> Contacts</Typography></a>

            <img src={phone} style={{ width: "1.5%", position: "absolute", right: "15%" }} />
            <a><Typography variant="subtitle1" gutterBottom style={{ position: "absolute", right: "5%", top: "20px", color: "gray", cursor: "pointer", fontSize: "15px" }}> +94 774 914 870</Typography></a>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <img src={mainPic} style={{ width: "100%", height: "90vh" }} />
        {/* <img src={caketoOrder} style={{width:"30%",height:"20vh",opacity:"0.5",position:"absolute",left:"20px"}} /> */}
        <h6 className="delicious" style={{ position: "absolute", left: "20px", top: "25%", color: "gray", fontSize: "80px", fontFamily: "Meow Script, cursive;" }}> Delicious Cake</h6>
        <h6 className="delicious" style={{ position: "absolute", left: "7%", top: "37%", color: "gray", fontSize: "80px", fontFamily: "Meow Script, cursive;" }}> to Order</h6>
        <Button variant="outlined" style={{ position: "absolute", left: "10%", top: "56%", cursor: "pointer", border: "1px solid #a00412", color: "#a00412" }}>Coose a Cake</Button>
      </div>




      {/* --------------second page ---------------------------------*/}

      <section className="secondPage">
        <div className="cakeDiscription">
          <div className="cakeDiscriptionRectangle">
            <h6 className="delicious" style={{ position: "absolute", left: "33%", top: "8%", color: "white", fontSize: "40px", fontFamily: "Meow Script, cursive;" }}> Filling</h6>
            <p style={{ position: "absolute", left: "22%", top: "25%", color: "white", fontSize: "15px" }}>You can choose one of six</p>
            <p style={{ position: "absolute", left: "26%", top: "30%", color: "white", fontSize: "15px" }}>toppings for the cake</p>

            <div className="discripCatogary">
              <p className="listSection">Snicker</p>
              <p className="listSection">Red Velvet</p>
              <p className="listSection">Oreo cheese</p>

              <p className="listSection">Chery bomb</p>
              <p className="listSection">Bery</p>
              <p className="listSection">Bounty</p>

            </div>

            <Button variant="outlined" style={{ position: "absolute", left: "18%", top: "85%", cursor: "pointer", border: "1px solid white", color: "white", width: "13vw" }}>To Order</Button>

          </div>
        </div>


        <div className="cakeSection">
          <h6 className="delicious" style={{ position: "absolute", left: "25%", top: "6%", color: "black", fontSize: "30px", fontFamily: "Meow Script, cursive;" }}> Our category</h6>

          <ul class="cakeCatogary-filter">
            <li class="list cakeCatogary-filter-active" data-filter="cake">Cakes</li>
            <li class="list" data-filter="cupcake">Cupcake</li>
            <li class="list" data-filter="cookies">Cookies</li>
          </ul>

          {/* <!--  Cake container --> */}
          <div class="cake-container">


            {/* ------------ Cakes------------------ */}

            {/* <!-- 1 (all)--> */}
            <a href="" class="cake-box cake">
              <img src={cake1} alt="" />

            </a>

            {/* <!-- 2 (app)--> */}
            <a href="" class="cake-box cake">
              <img src={cake2} alt="" />

            </a>

            {/* <!-- 3 (desing)--> */}
            <a href="" class="cake-box cake">
              <img src={cake3} alt="" />

            </a>

            {/* <!-- 4 (web)--> */}
            <a href="" class="cake-box cake">
              <img src={cake4} alt="" />

            </a>

            {/* <!-- 5 (ai)--> */}
            <a href="" class="cake-box cake">
              <img src={cake5} alt="" />

            </a>

            {/* <!-- 6 --> */}
            <a href="" class="cake-box cake">
              <img src={cake6} alt="" />

            </a>



            {/* ------------ cupcake------------------ */}
            {/* <!-- 1 (all)--> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake1} alt="" />

            </a>

            {/* <!-- 2 (app)--> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake2} alt="" />

            </a>

            {/* <!-- 3 (desing)--> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake3} alt="" />

            </a>

            {/* <!-- 4 (web)--> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake4} alt="" />

            </a>

            {/* <!-- 5 (ai)--> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake5} alt="" />

            </a>

            {/* <!-- 6 --> */}
            <a href="" class="cupCake-box cake-box cupcake">
              <img src={cake6} alt="" />

            </a>



            {/* ------------ Cookies------------------ */}
            {/* <!-- 1 (all)--> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake1} alt="" />

            </a>

            {/* <!-- 2 (app)--> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake2} alt="" />

            </a>

            {/* <!-- 3 (desing)--> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake3} alt="" />

            </a>

            {/* <!-- 4 (web)--> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake4} alt="" />

            </a>

            {/* <!-- 5 (ai)--> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake5} alt="" />

            </a>

            {/* <!-- 6 --> */}
            <a href="" class="cookies-box cake-box cookies">
              <img src={cake6} alt="" />

            </a>


          </div>

        </div>
      </section>





      {/* --------------Third page ---------------------------------*/}

      <section className="thirdPage">

        <div className="thirdPageTopic">
          <h6 style={{ position: "absolute", left: "25%", top: "-40%", color: "black", fontSize: "30px", fontFamily: "Meow Script, cursive;" }}> About Us</h6>
        </div>

        <div className="thirdPageParagraph">
          <p style={{ position: "relative", textAlign: "center", margin: "2px", top: "14%", color: "black", fontSize: "16px", lineHeight: "30px" }}>
            We specialize in selling cakes, Cuspcakes and Cookies to order, but we alsohave two <br />
            cozy cafes. In them you can not only try some of the best cakes in our city. You can <br />
            have a wonderful time with the whole family. We allow people to order individule <br />
            cakes according to their design for any holiday.
          </p>

          <div style={{ width: "18%", border: "0.1px solid #a00412", position: "relative", textAlign: "center", margin: "auto", top: "24%" }}></div>
          <h6 style={{ position: "relative", textAlign: "center", margin: "auto", top: "34%", color: "#a00412", fontSize: "25px", fontFamily: "Meow Script, cursive;" }}>Cake Bakery</h6>
        </div>

      </section>





      {/* --------------Forth page ---------------------------------*/}

      <section className="forthPage">

        <div className="forthPageDiscription">
          <div className="forthPageDiscriptionRectangle">

            <h6 className="delicious" style={{ position: "relative", textAlign: "center", margin: "auto", top: "15%", color: "white", fontSize: "40px", fontFamily: "Meow Script, cursive;" }}> Filling</h6>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", top: "24%", color: "white", fontSize: "15px" }}>
              When you buy three cake of 1 kilogram <br />
              or two cakes of 1.5 kilogram, you get a <br />
              kilogram cake as a gift.
            </p>

            <Button variant="outlined" style={{ position: "absolute", left: "25%", top: "72%", cursor: "pointer", border: "1px solid white", color: "white", width: "13vw" }}>To Order</Button>

          </div>
        </div>


        <div className="forthPageimage">
          <div className="forthPageimageRectangle">
            <img src={bery} alt="" />

          </div>
        </div>

      </section>






      {/* --------------five page ---------------------------------*/}

      <section className="fivePage">
        <div className="fivePageRectangle">
          <h6 style={{ position: "relative", textAlign: "center", margin: "auto", top: "-5%", color: "black", fontSize: "30px", fontFamily: "Meow Script, cursive;" }}> //</h6>

          <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>
            Wonderful bakery. It's always nice nice to sit in their cafe <br />
            with a Cup of tea and a piece of my favorite cake. I <br />
            love Snickers filling. When it is not possible to come <br />
            to the cafe. I always use delivery. Cake bakeries <br />
            always work quickly. Thanks.
          </p>

          <h6 style={{ position: "relative", textAlign: "center", margin: "auto", top: "20%", color: "#a00412", fontSize: "25px", fontFamily: "Meow Script, cursive;" }}> Prabhashwaree</h6>

        </div>


      </section>





      {/* --------------six page ---------------------------------*/}
      <section className="sixPage">
        <div className="sixPageRectangle">
          <img src={bakery} alt="" />

          <div className="sixPageDiscriptionRectangle">

            <h6 className="delicious" style={{ position: "relative", textAlign: "center", margin: "auto", top: "12%", color: "white", fontSize: "29px", fontFamily: "Meow Script, cursive;" }}> Our Contacts</h6>

            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "21%", color: "white", fontSize: "15px" }}>
              Phone :  +94 774 914 870 <br/>
               E-mail :  prabhashwaree57@gmail.com <br/>
               Address :  698/8, Marconi Road,<br/> 
               Wadduwa Panadura <br/>
               --------- <br/>
               351/6, Howard Street, <br/>
               Rawaththa Moratuwa
               </p>
            {/* <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>E-mail :  prabhashwaree57@gmail.com</p>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>Address :  698/8, Marconi Road, </p>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>Wadduwa Panadura</p>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>---------</p>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>351/6, Howard Street,</p>
            <p style={{ position: "relative", textAlign: "center", margin: "auto", lineHeight: "30px", top: "10%", black: "white", fontSize: "15px" }}>Rawaththa Moratuwa</p> */}


          </div>



        </div>



      </section>

    </>
  );
}

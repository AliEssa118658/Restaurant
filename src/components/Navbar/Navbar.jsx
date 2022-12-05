import React from 'react';

import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { useState } from 'react';
const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);

  return(

  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
    <img src={images.gericht} alt="app-logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='o__opensans'><a href='#home'>Home</a></li>
      <li className='o__opensans'><a href='#about'>About</a></li>
      <li className='o__opensans'><a href='#menu'>Menu</a></li>
      <li className='o__opensans'><a href='#awards'>Awards</a></li>
      <li className='o__opensans'><a href='#contact'>Contact</a></li> 
    </ul>
    <div className='app__navbar-login'>
    <a href='#login'className='o__opensans'>Log In/ Register</a>
    
    <a href='/'className='o__opensans'>Book Table</a>
    </div>
    <div className='app__navbar-smallScreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true)}}/>

      {toggleMenu && (
      <div className='app__navbar-smallScreen-overlay flex__center slide-buttom'>
      <MdOutlineRestaurantMenu fontSize={27} color="#fff" className='overlay__close' onClick={()=>{setToggleMenu(false)}}/>
          <ul className='app__navbar-smallScreen-links' >
            <li className='o__opensans'><a href='#home'>Home</a></li>
            <li className='o__opensans'><a href='#about'>About</a></li>
            <li className='o__opensans'><a href='#menu'>Menu</a></li>
            <li className='o__opensans'><a href='#awards'>Awards</a></li>
            <li className='o__opensans'><a href='#contact'>Contact</a></li> 
          </ul>
      </div>
      )}
    </div>
  </nav>
);
}
export default Navbar;

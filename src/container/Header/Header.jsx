import React from 'react';

import './Header.css';
import images from '../../constants/images';
import './Header.css'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div className='app__wrapper-info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to fine Dining</h1>
      <p className="p__opensans" style={{margin:'2erm 0',fontFamily:'var(--font-base)'}}>welcome at our restaurant we have many kind of food you should to try it </p>
      <button type='button' className='custom__buttom'>Explore Menu</button>
    </div>
    <div className='app__wrapper-img'>
  <img src={images.welcome} alt="header image"/>
    </div>
    
  </div>
);

export default Header;

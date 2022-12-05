import React from 'react';

import './AboutUs.css';
import images from '../../constants/images';
const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>

    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content-about' style={{textAlign:'right'}}>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>The customer is very important, the customer will be followed by the customer.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} style={{height:800,}} alt="about_knife"/>
      </div>
      <div className='app__aboutus-content-history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>The customer is very important, the customer will be followed by the customer.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;

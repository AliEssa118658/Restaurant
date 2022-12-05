import React from 'react';
import { SubHeading } from '../../components';
import './Chef.css';
import { images } from '../../constants';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.chef} alt="chef"/>
   </div>
   <div className='app__wrapper_info'>
    <SubHeading title="Chef's word"/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>

    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
      <img src={images.quote} alt='quote'/>
      <p className='p__opensans'>The customer should be the customer,</p>
      </div>
      <p className='p__opensans'>We always work to keep our restaurant at the forefront, and we believe that we will be present all over the world and spread our distinctive and luxurious food </p>
    </div>
    <div className='app__chef-sign'>
      <p>Kevin Lue</p>
      <p className='p__opensans'> Chef & Founder</p>
      <img src={images.sign} alt="sign"/>
    </div>
   </div>
  </div>
);

export default Chef;

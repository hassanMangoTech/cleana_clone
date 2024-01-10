import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import sponsor1 from '../../assets/sponsors/01.jpg'
import sponsor2 from '../../assets/sponsors/02.jpg'
import sponsor3 from '../../assets/sponsors/03.jpg'
import sponsor4 from '../../assets/sponsors/04.jpg'
import sponsor5 from '../../assets/sponsors/05.jpg'
import sponsor6 from '../../assets/sponsors/06.jpg'
import './slider.css'

const Slider = () => 
{

    return (
       <div className='slider-main'>
        <div className='slider-img'>
            <img src={sponsor1} alt="" />
        </div>
        <div className='slider-img'>
            <img src={sponsor2} alt="" />
        </div>
        <div className='slider-img'>
            <img src={sponsor3} alt="" />
        </div>
        <div className='slider-img'>
            <img src={sponsor4} alt="" />
        </div>
        <div className='slider-img'>
            <img src={sponsor5} alt="" />
        </div>
        <div className='slider-img'>
            <img src={sponsor6} alt="" />
        </div>
       </div>
       
    )
}

export default Slider
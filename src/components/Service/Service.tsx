import React from 'react'
import './service.css' 
import starLeft from '../../assets/About/01.png'
import starRight from '../../assets/About/02.png'
import SwiperComponent from '../swiper/Swiper'

const Service = () => {
  return (
    <div className='service-main'>

       <div className="service-heading">
        <div>
          <img src={starLeft} alt="" />
          <h5>Our Best Services</h5>
          <img src={starRight} alt="" />
        </div>
        <h2>
          Providing The Best Services For <br />Our Customers
        </h2>
      </div>

      <div className='service-swiper'>
      <SwiperComponent/>
      </div>

    </div>
  )
}

export default Service
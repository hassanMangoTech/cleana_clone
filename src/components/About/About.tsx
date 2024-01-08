import React from 'react'
import './about.css'
import starLeft from '../../assets/About/01.png'
import starRight from '../../assets/About/02.png'
import card1 from '../../assets/About/card1.png'
import card2 from '../../assets/About/card2.png'
import card3 from '../../assets/About/card3.png'
import card4 from '../../assets/About/card4.png'
const About = () => {
  return (
    <div className='about-main'>
      <div className="about-heading">
        <div>
          <img src={starLeft} alt="" />
          <h5>Our Introduction</h5>
          <img src={starRight} alt="" />
        </div>
        <h2>
          Reasons Why People Choose Us
        </h2>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <img src={card1} alt="" />
            <h5>2M+ People Trusted</h5>
            <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
        </div>
        <div className="about-card">
          <img src={card2} alt="" />
            <h5>Over 400+ Cleaner</h5>
            <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
        </div>
        <div className="about-card">
          <img src={card3} alt="" />
            <h5>100% Satisfaction</h5>
            <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
        </div>
        <div className="about-card">
          <img src={card4} alt="" />
            <h5>Cost Effective</h5>
            <p>Experienced counsel in haddock and institutional arbitration in legal hubs like Singapore.</p>
        </div>
      </div>
      <div className="about-text">
        <p>Challenges are just opportunities in disguise. <span>Take The Challenge!</span></p>
      </div>
    </div>
  )
}

export default About
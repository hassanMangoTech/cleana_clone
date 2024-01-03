import React from 'react'
import'./hero.css'
import girlImage from '../../assets/girl.png'

const Hero = () => {
  return (
		<div className="hero-main">
			<div className="hero-left">
				<p>30% OFF FOR NEW CLIENT</p>
				<span>
					<h2>
						FRESH <span>&</span> CLEAN
					</h2>
					<h4>WE HAVE THE BEST PEOPLE AND EQUIPMENT</h4>
					<p>
						We help clean all your needs with our various Skills and Range of awesome
						Services.
					</p>
				</span>
				<div className="hero-btns">
					<button>Discover More</button>
					<button>Our Services</button>
				</div>
			</div>
			<div className="hero-right">
				<div className="hero-img">
					<img src={girlImage} alt="" />
				</div>
			</div>
		</div>
  );
}

export default Hero
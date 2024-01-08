import React from 'react'
import './contactUs.css'
import starRight from "../../assets/About/02.png";

const ContactUs = () => {
  return (
		<div className="contactus-main">
			<div className="service-heading">
				<div>
					<h5>Get A Free Estimate</h5>
					<img src={starRight} alt="" />
				</div>
				<h2>Contact For The Services</h2>
			</div>
		</div>
  );
}

export default ContactUs
import React, { useState } from "react";
import "./details.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";



const Details = ({ menuIsOpen, setMenuIsOpen }) => {
	
	const handleMenuClick = () => {
		setMenuIsOpen(!menuIsOpen);
	};
	return (
		<div className="details-main">
			<div>
				<img
					src="	https://thinkamentor.com/pixenx/cleana-demo/cleana/assets/images/header/logo/01.png"
					alt=""
				/>
			</div>

			<div className="details-info">
				<div className="details-flex">
					<div>
						<img
							src="https://thinkamentor.com/pixenx/cleana-demo/cleana/assets/images/header/icon/01.png"
							alt=""
						/>
					</div>
					<div className="details-content">
						<p>Office Time</p>
						<p>Sun - Mon 09am-06pm</p>
					</div>
				</div>

				<div className="details-flex">
					<div>
						<img
							src="https://thinkamentor.com/pixenx/cleana-demo/cleana/assets/images/header/icon/02.png"
							alt=""
						/>
					</div>
					<div className="details-content">
						<p>Email Address</p>
						<p>cleana@gmail.com</p>
					</div>
				</div>

				<div className="details-flex">
					<div>
						<img
							src="https://thinkamentor.com/pixenx/cleana-demo/cleana/assets/images/header/icon/03.png"
							alt=""
						/>
					</div>
					<div className="details-content">
						<p>Office Location</p>
						<p>18 Melton, Lucas City 1200m</p>
					</div>
				</div>
			</div>

			<div className="mob-navbar">
				{menuIsOpen ? (
					<RxCross2 size={30} onClick={handleMenuClick} />
				) : (
					<RxHamburgerMenu size={30} onClick={handleMenuClick} />
				)}
			</div>
		</div>
	);
};

export default Details;

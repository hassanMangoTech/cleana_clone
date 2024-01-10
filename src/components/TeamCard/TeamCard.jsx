import React, { useState } from "react";
import { HiShare } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./teamCard.scss";

const TeamCard = ({ pic, name, designation, color }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleLeave = () => {
		setIsHovered(false);
	};
	return (
		<div className="teamCard-main">
			<div className="teamCard-img">
				<img src={pic} alt="" />
				<div className="teamCard-share">
					<span
						className="share-icon"
						style={{ backgroundColor: color }}
						onMouseEnter={handleHover}
						onMouseLeave={handleLeave}
					>
						<HiShare color="#fff" size={25} />
					</span>
					{isHovered && (
						<div
							className="socials"
							onMouseEnter={handleHover}
							onMouseLeave={handleLeave}
						>
							<span style={{ backgroundColor: "#3b5998" }}>
								<FaFacebookF color="#fff" size={25} />
							</span>
							<span style={{ backgroundColor: "#29ABE2" }}>
								<FaTwitter color="#fff" size={25} />
							</span>
							<span style={{ backgroundColor: "#186fc6" }}>
								<FaLinkedinIn color="#fff" size={25} />
							</span>
							<span style={{ backgroundColor: "#fe1f68" }}>
								<FaInstagram color="#fff" size={25} />
							</span>
						</div>
					)}
				</div>
			</div>
			<h5>{name}</h5>
			<p>{designation}</p>
		</div>
	);
};

export default TeamCard;

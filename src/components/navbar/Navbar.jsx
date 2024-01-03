import React, { useState } from "react";
import "./navbar.css";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";


const Navbar = ({ menuIsOpen }) => {
    const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	return (
		<>
			{/* {menuIsOpen ? (
				<nav className="navbar-main">
					<div className="navbar-links">
						<div className="navbar-flex">
							<h4>Home</h4>
							<FaPlus />
						</div>
						<div className="navbar-flex">
							<h4>Pages</h4>
							<FaPlus />
						</div>
						<div className="navbar-flex">
							<h4>Services</h4>
							<FaPlus />
						</div>
						<div className="navbar-flex">
							<h4>Portfolio</h4>
							<FaPlus />
						</div>
						<div className="navbar-flex">
							<h4>Blog</h4>
							<FaPlus />
						</div>
						<div className="navbar-flex">
							<h4>Contact</h4>
						</div>
					</div>

					<div className="navbar-icons">
						<FaSearch color="white" size={30} />
						<FaCartPlus color="white" size={30} />
					</div>

					<button>Online Appointment</button>
				</nav>
			) : null} */}
			<nav className="navbar-main">
				<div className="navbar-links">
					<div className="navbar-flex">
						<h4>Home</h4>
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							{isHovered ? <FiMinus /> : <FaPlus />}
						</div>
					</div>
					<div className="navbar-flex">
						<h4>Pages</h4>
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<FaPlus />
						</div>
					</div>
					<div className="navbar-flex">
						<h4>Services</h4>
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<FaPlus />
						</div>
					</div>
					<div className="navbar-flex">
						<h4>Portfolio</h4>
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<FaPlus />
						</div>
					</div>
					<div className="navbar-flex">
						<h4>Blog</h4>
						<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<FaPlus />
						</div>
					</div>
					<div className="navbar-flex">
						<h4>Contact</h4>
					</div>
				</div>

				<div className="navbar-icons">
					<FaSearch color="white" size={30} />
					<FaCartPlus color="white" size={30} />
				</div>

				<button>Online Appointment</button>
			</nav>
		</>
	);
};

export default Navbar;

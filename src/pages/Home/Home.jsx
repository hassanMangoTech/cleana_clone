import React, { useState } from "react";
import Details from "../../components/Details/Details";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
import Hero from "../../components/Hero/Hero";

const Home = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<>
			<Details menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			<div className="home-navbar">
				<Navbar menuIsOpen={menuIsOpen} />
			</div>
      <Hero/>
		</>
	);
};

export default Home;

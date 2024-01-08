import  { useState } from "react";
import Details from "../../components/Details/Details";
import Navbar from "../../components/navbar/Navbar";
import './home.css'
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/slider/Slider";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Service from "../../components/Service/Service";
import ContactUs from "../../components/ContactUs/ContactUs";

const Home = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<>
			<Details menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			<div className="home-navbar">
				<Navbar menuIsOpen={menuIsOpen} />
			</div>
      <Hero/>
      <Slider/>
			<About/>
			<Contact/>
			<Service/>
			<ContactUs/>
		</>
	);
};

export default Home;

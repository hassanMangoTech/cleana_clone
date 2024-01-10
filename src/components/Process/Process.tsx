import React from "react";
import "./process.scss";
import starRight from "../../assets/Process/03.png";
import starLeft from "../../assets/Process/04.png";
import card1 from "../../assets/Process/01.jpg";
import card2 from "../../assets/Process/02.jpg";
import card3 from "../../assets/Process/03.jpg";
import Card from "../Card/Card";

const Process = () => {
	return (
		<div className="process-main">
			<div className="process-heading">
				<div>
					<img src={starRight} alt="" />
					<h5>Our Working Process</h5>
					<img src={starLeft} alt="" />
				</div>
				<h2>Easy As 1-2-3 See How Works</h2>
			</div>
			<div className="process-card">
				<Card
					img={card1}
					heading={"Easy Online Scheduling Just Few Clicks"}
					para={"Aenean vulputate elefend tell aenportior euconsequat vitae eleifend"}
					number={"01"}
				/>
				<Card
					img={card2}
					heading={"Cleaning With Care And Eco-Friendly Products"}
					para={"Aenean vulputate elefend tell aenportior euconsequat vitae eleifend"}
					number={"02"}
				/>
				<Card
					img={card3}
					heading={"Enjoy Cleanliness And Shine Around You"}
					para={"Aenean vulputate elefend tell aenportior euconsequat vitae eleifend"}
					number={"03"}
				/>
			</div>
		</div>
	);
};

export default Process;

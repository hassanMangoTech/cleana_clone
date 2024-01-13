import  { useState } from "react";
import "./projects.scss";
import starLeft from "../../assets/About/01.png";
import starRight from "../../assets/About/02.png";
import project1 from "../../assets/Projects/01.jpg";
import project2 from "../../assets/Projects/02.jpg";
import project3 from "../../assets/Projects/03.jpg";
import project4 from "../../assets/Projects/04.jpg";
import project5 from "../../assets/Projects/05.jpg";
import project6 from "../../assets/Projects/06.jpg";
import icon from "../../assets/Projects/icon.png";

const Projects = () => {
	const [selectedButton, setSelectedButton] = useState(0); // Default selected button is the first one
	const projectPics = [
		{
			type: "Residential",
			pic: project1,
		},
		{
			type: "Residential",
			pic: project5,
		},
		{
			type: "Commercial",
			pic: project2,
		},
		{
			type: "Commercial",
			pic: project4,
		},
		{
			type: "Window",
			pic: project3,
		},
		{
			type: "Window",
			pic: project5,
		},
		{
			type: "Kitchen",
			pic: project1,
		},
		{
			type: "Kitchen",
			pic: project6,
		},
	];
	const [filteredProjectPics, setFilteredProjectPics] = useState([...projectPics]);

	const buttonTexts = ["View All", "Residential", "Commercial", "Window", "Kitchen"];

	const handleButtonClick = (buttonNumber) => {
		setSelectedButton(buttonNumber);
		if (buttonNumber === 0) {
			setFilteredProjectPics([...projectPics]);
		} else {
			setFilteredProjectPics(
				projectPics.filter((pic) => pic.type === buttonTexts[buttonNumber])
			);
		}
	};

	console.log(filteredProjectPics);

	return (
		<div className="projects-main">
			<div className="service-heading">
				<div>
					<img src={starLeft} alt="" />
					<h5>Our Best Portfolio</h5>
					<img src={starRight} alt="" />
				</div>
				<h2>
					Check Our Portfolio Which Is Built With <br />
					Our Experience
				</h2>
			</div>
			<div className="projects-btns">
				{buttonTexts.map((btn, index) => {
					return (
						<button
							onClick={() => handleButtonClick(index)}
							key={index}
							style={{
								backgroundColor: index === selectedButton ? "#F7931E" : "#fff",
								color: index === selectedButton ? "#fff" : "#1F2A59",
							}}
						>
							{buttonTexts[index]}
						</button>
					);
				})}
			</div>
			<div className="projects-display">
				{filteredProjectPics.map((project, index) => {
					return (
						<div key={index}>
							<img src={project.pic} alt="" />
							<div className="layer">
								<h5>Super Secret Project</h5>
								<span>Financial</span>
							</div>
							<div className="shape"></div>
							<span className="icon">
								<img src={icon} alt="icon" />
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

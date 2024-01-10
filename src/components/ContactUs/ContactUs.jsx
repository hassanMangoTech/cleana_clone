import "./contactUs.css";
import starRight from "../../assets/About/02.png";
import { useState } from "react";

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: "",
		company: "",
		email: "",
		subjects: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Add your logic for form submission here
		console.log("Form submitted:", formData);
	};

	return (
		<div className="contactus-main">
			<div className="contactus-heading ">
				<div>
					<h5>Get A Free Estimate</h5>
					<img src={starRight} alt="" />
				</div>
				<h2>Contact For The Services</h2>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="form-row">
					<input
						type="text"
						placeholder="Your Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="Company"
						name="company"
						value={formData.company}
						onChange={handleChange}
					/>
				</div>
				<div className="form-row">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					<input
						type="text"
						placeholder="Subjects"
						name="subjects"
						value={formData.subjects}
						onChange={handleChange}
					/>
				</div>
				<div className="form-row">
					<textarea
						placeholder="Message"
						name="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>
				</div>
				<div className="form-row">
					<button type="submit">Send A Message</button>
				</div>
			</form>
		</div>
	);
};

export default ContactUs;

import './testimonial.scss'
import starLeft from "../../assets/Process/03.png";
import starRight from "../../assets/Process/04.png";
import { FaStar } from "react-icons/fa6";



export const Testimonial = () => {
  return (
		<div className="testimonial-main">
			<div className="testimonial-heading">
				<div>
					<img src={starLeft} alt="" />
					<h5>What We’re Offering</h5>
					<img src={starRight} alt="" />
				</div>
				<h2>
					Providing The Best Services For Our <br />
					Customers
				</h2>
			</div>
			<div className="testimonial-swiper">
				{/* make swiper here */}
			</div>
		</div>
  );
}

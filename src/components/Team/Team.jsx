import starLeft from '../../assets/About/01.png'
import starRight from "../../assets/About/02.png";
import './team.scss'
import TeamCard from '../TeamCard/TeamCard';
import person1 from '../../assets/Team/01.jpg'
import person2 from '../../assets/Team/02.jpg'
import person3 from '../../assets/Team/03.jpg'
import person4 from '../../assets/Team/04.jpg'

const Team = () => {
  return (
		<div className="team-main">
			<div className="team-heading">
				<div>
					<img src={starLeft} alt="" />
					<h5>Our Awesome Team</h5>
					<img src={starRight} alt="" />
				</div>
				<h2>
					We Have The Best Team To Clean
					<br /> Your Surrounding Area.
				</h2>
			</div>
			<div className="team-cards">
				<TeamCard
					pic={person1}
					name={"Michael Daniel"}
					designation={"Office Cleaner"}
					color={"#8CC63F"}
				/>
				<TeamCard
					pic={person2}
					name={"Bobby N. Phelan"}
					designation={"Hardware Engineer"}
					color={"#3b5998"}
				/>
				<TeamCard
					pic={person3}
					name={"Angelo J. Scott"}
					designation={"Information Manager"}
					color={"#F7931E"}
				/>
				<TeamCard
					pic={person4}
					name={"Paula R. Crouse"}
					designation={"Housekeeper"}
					color={"#29ABE2"}
				/>
			</div>

      <div className="team-btn">
        <button>View All Cleaners</button>
      </div>
		</div>
  );
}

export default Team
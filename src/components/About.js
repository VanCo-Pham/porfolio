import avatar from '../images/pvc.ico';
import { Link } from 'react-scroll';

const About = () => {
	return (
		<section className="about">
			<div className="about-img">
				<img src={avatar} alt="" />
			</div>
			<div className="about-info">
				<h1>Front-end Developer, Python Engineer & 3D Designer</h1>
				<h3>I design and make simple things, and just loving that.</h3>
			</div>
			<ul className="about-menu">
				<Link to="intros" spy={true} smooth={true}>
					<li style={{ '--i': 1 }}>Introduction</li>
				</Link>
				<Link to="skills" spy={true} smooth={true}>
					<li style={{ '--i': 1.2 }}>Skills</li>
				</Link>
				<Link to="projects" spy={true} smooth={true}>
					<li style={{ '--i': 1.3 }}>My Projects</li>
				</Link>
				<Link to="contact" spy={true} smooth={true}>
					<li style={{ '--i': 1.4 }}>Contact</li>
				</Link>
			</ul>
		</section>
	);
};

export default About;

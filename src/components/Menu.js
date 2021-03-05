import { GoPlus } from 'react-icons/go';
import { MdTimeline } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { GiSkills } from 'react-icons/gi';
import { Link } from 'react-scroll';

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function() {
	// detects new state and compares it with the new one
	if (document.body.getBoundingClientRect().top > scrollPos) {
		// floatMenu.style.display = 'block';
		document.getElementById('float-menu').style.opacity = 0;
	} else {
		document.getElementById('float-menu').style.opacity = 1;
	}
	// saves the new position for iteration.
	scrollPos = document.body.getBoundingClientRect().top;
});

const Menu = () => {
	return (
		<div className="menu" id="float-menu">
			<input type="checkbox" name="menuCheckbox" />
			<span>
				<GoPlus />
			</span>
			<ul className="body-menu">
				<Link to="intros" spy={true} smooth={true}>
					<li className="menu-intro">
						<MdTimeline />
					</li>
				</Link>
				<Link to="skills" spy={true} smooth={true}>
					<li className="menu-skills">
						<GiSkills />
					</li>
				</Link>
				<Link to="projects" spy={true} smooth={true}>
					<li className="menu-projects">
						<AiFillProject />
					</li>
				</Link>
				<Link to="contact" spy={true} smooth={true}>
					<li className="menu-contact">
						<RiContactsBook2Fill />
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default Menu;

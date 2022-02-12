import project_01 from '../images/respondWeb.png';
import kumahisa from '../images/kumahisa.PNG';
import spaceRun from '../images/spaceRun.png';

import ProjectVideo from './Project';
import ProjectImg from './ProjectImg';
const Projects = () => {
	const projectVideo = [
		{
			id: 1,
			title: 'REPORT GENERATOR',
			description:
				'Written in Python, using Pyside2. It can gather information on the website, processing, save it in a database, create daily reports. Store important information and able to retrieve it at any time. Fully responsive.',
			src: '',
			video: (
				<iframe
					title="Report Generator Video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/1vXgsDEvtpg"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			),
			reverse: false
		},
		{
			id: 2,
			title: 'Responsive modern mini game App.',
			description:
				'The mini project is written in Python & Pyside2. Included Caro and Tic Tac Toe mini-games. Modern look, responsive and playable.',
			src: '',
			video: (
				<iframe
					title="mini game app video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/MonJOHk-1PI"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			),
			reverse: true
		},
		{
			id: 3,
			title: 'Unity VFX.',
			description:
				'Unity VFX with shader graph, vfx graph.',
			src: '',
			video: (
				<iframe
					title="mini game app video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/aNM1Gm05Dq4" 
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			),
			reverse: false
		},
		{
			id: 4,
			title: 'Web automated.',
			description:
				'Using simple javascript and scripty extension to automaticly do stuff on the website. Theoratically, it can do everything you need.',
			src: '',
			video: (   
				<iframe
					title="mini game app video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/cktsPhbjwIQ" 
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			),
			reverse: true
		}
	];
	const projectImg = [
		{
			id: 1,
			title: 'Responsive Commercial Website Demo.',
			description: 'Fully responsive, fetching data from API server.',
			src: project_01,
			reverse: false,
			image: true,
			weblink: "https://vanco-pham.github.io/responsiveWeb/"
		},
		{
			id: 2,
			title: 'Kumahisa web (front-end dev).',
			description: 'Fully responsive, front-end project for Kumahisa.co.jp.',
			src: kumahisa,
			reverse: false,
			image: true,
			weblink: "https://vanco-pham.github.io/Kuma/"
		},
		{
			id: 3,
			title: 'Space Run Game (Prototype).',
			description: 'Prototype of the Speed Runner game, try it on itch.io, link below.',
			src: spaceRun,
			reverse: false,
			image: true,
			weblink: "https://copham.itch.io/space-run?secret=76g7RyuvNNkDK86YIBT0Rv1dWI"
		}
	];
	return (
		<section className="projects" id="projects">
			<h1>MY PROJECTS</h1>
			<ProjectVideo data={projectVideo} />
			<ProjectImg data={projectImg} />
		</section>
	);
};

export default Projects;

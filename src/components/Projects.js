import project_01 from '../images/respondWeb.png';
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
		}
	];
	const projectImg = [
		{
			id: 1,
			title: 'Responsive Commercial Website Demo.',
			description: 'Fully responsive, fetching data from API server.',
			src: project_01,
			reverse: false,
			image: true
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

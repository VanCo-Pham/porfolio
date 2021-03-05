import project_01 from '../images/respondWeb.png';
import ProjectVideo from './Project';
import ProjectImg from './ProjectImg';
const Projects = () => {
	const projectVideo = [
		{
			id: 1,
			title: 'REPORT GENERATOR',
			description:
				'Writen in Python, using Pyside2. Its can gather information in the website, processing, and save it in database, export nesserasy report for each day. Store importance infomation and can retriet at anytime. Fully responsive and usable.',
			src: '',
			video: (
				<iframe
					title="Report Generator Video"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/1vXgsDEvtpg"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			),
			reverse: false
		},
		{
			id: 2,
			title: 'Responsive modern mini game App.',
			description:
				'Mini project written in Python & Pyside2. Included Caro and Tic Tac Toe mini games. Modern look, responsive and playable.',
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
			description: 'Fully responsive, fetching data from api server.',
			src: project_01,
			reverse: false,
			image: true
		}
	];
	return (
		<section className="projects" id="projects">
			<ProjectVideo data={projectVideo} />
			<ProjectImg data={projectImg} />
		</section>
	);
};

export default Projects;

import pic_01 from '../images/cssBattle.png';
import pic_03 from '../images/logo512.png';
import pic_02 from '../images/js.png';
// import python from '../images/python.png';
import unity from '../images/unity.png';

import blender from '../images/blender.png';
import sass from '../images/sass.png';

import React, { useEffect } from 'react';

const Skills = () => {
	useEffect(() => {
		const script_1 = document.createElement('script');
		script_1.src = 'swiper-helper.js';
		script_1.async = true;
		document.body.appendChild(script_1);
		return () => {
			document.body.removeChild(script_1);
		};
	}, []);
	const mySkills = [
		{
			name: 'HTML & CSS',
			level: '95%',
			src: pic_01,
			description: 'Top 100 on cssbattle.dev',
			link: 'https://cssbattle.dev/player/copham'
		},
		{
			name: 'JavaScript',
			level: '80%',
			src: pic_02,
			description: 'Expecially in making animation.',
			link: 'https://cssbattle.dev/player/copham'
		},
		{
			name: 'React',
			level: '80%',
			src: pic_03,
			description: 'Love making reused components.',
			link: 'https://cssbattle.dev/player/copham'
		},
		{
			name: 'Unity',
			level: '80%',
			src: unity,
			description: 'Two years experiences.',
			link: 'https://cssbattle.dev/player/copham'
		},
		{
			name: 'Blender',
			level: '70%',
			src: blender,
			description: 'Three years in 3D modeling.',
			link: 'https://cssbattle.dev/player/copham'
		},
		{
			name: 'SASS',
			level: '90%',
			src: sass,
			description: 'Proficient.',
			link: 'https://cssbattle.dev/player/copham'
		}
	];
	return (
		<section className="skills" id="skills">
			<h1 className="skills-name">MY SKILLS</h1>
			<div className="swiper-wrap">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{mySkills.map((skill) => (
							<div className="swiper-slide" key={skill.src}>
								<div className="cards">
									<h1>{skill.name}</h1>
									{/* <span className="level" style={{ '--i': skill.level }} /> */}
									<img src={skill.src} alt="" />
									<p>{skill.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;

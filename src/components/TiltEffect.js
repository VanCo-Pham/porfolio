import React, { useEffect } from 'react';

const TiltEffect = ({ data }) => {
	useEffect(() => {
		const script_1 = document.createElement('script');
		script_1.src = 'vanilla-tilt.js';
		script_1.async = true;
		document.body.appendChild(script_1);
		return () => {
			document.body.removeChild(script_1);
		};
	}, []);
	return (
		<section className="skillCards">
			{data.map((skill) => (
				<div
					className="tiltEffect"
					data-tilt
					data-tilt-glare
					data-tilt-max-glare="1"
					data-tilt-scale="1"
					key={Math.random() * 100}
				>
					<h1>{skill.name}</h1>
					<span className="level" style={{ '--i': skill.level }} />
					<img src={skill.src} alt="" />
					<p>{skill.description}</p>
				</div>
			))}
		</section>
	);
};

export default TiltEffect;

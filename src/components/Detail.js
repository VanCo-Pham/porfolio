import React, { useEffect } from 'react';
import Timeline from './Timeline';
import kt3d_1 from '../images/kienthuc3d_01.jpg';
import kt3d_2 from '../images/kienthuc3d_02.jpg';

const Detail = () => {
	useEffect(() => {
		const script_1 = document.createElement('script');
		script_1.src = 'vanilla-tilt.js';
		script_1.async = true;
		document.body.appendChild(script_1);
		return () => {
			// document.body.removeChild(script);
			document.body.removeChild(script_1);
		};
	}, []);
	return (
		<section className="detail" id="intros">
			<Timeline />

			<div className="detail-container" data-tilt data-tilt-scale="1">
				<h1 data-aos="fade-left">Hello, I’m Co Pham. Nice to meet you.</h1>

				<p data-aos="fade-left">
					I have the love of coding since I was introduced to Pascal, I started to make interesting things
					with it. <br />
					Years later, I made a huge mistake not follow my passion and went to Biotechnology as my carrier.
					But coding was always where my heart pointed, so I decided to follow my heart. <br />
					I’m a self teach developer, I’ve been working with my IT skill for years, I'm a fast learner,
					self-disciplined, non-stop learning person.
				</p>
			</div>
			<div className="detail-picture" data-aos="fade-up">
				<img src={kt3d_1} alt="" />
				<img src={kt3d_2} alt="" />
			</div>
		</section>
	);
};

export default Detail;

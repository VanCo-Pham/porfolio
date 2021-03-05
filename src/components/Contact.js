import avatar from '../images/pvc.ico';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import React, { useEffect } from 'react';

const Contact = () => {
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
		<section className="contact" id="contact">
			<div className="contact-card" data-tilt data-tilt-scale="1" data-tilt-glare data-tilt-max-glare="1">
				<img data-aos="fade-in" src={avatar} alt="" />

				<h2 data-aos="fade-left">CO PHAM</h2>
				<p data-aos="fade-up">
					Front-end Developer <br />Da Nang, Viet Nam
				</p>

				<div className="contact-card-icons">
					<a href="https://www.facebook.com/vanco1110/" target="_blank" rel="noreferrer">
						<span style={{ '--color': 'blue' }}>
							<FaFacebookF />
						</span>
					</a>
					<a href="https://www.youtube.com/watch?v=MonJOHk-1PI" target="_blank" rel="noreferrer">
						<span style={{ '--color': 'red' }}>
							<FaYoutube />
						</span>
					</a>
					<a
						href="https://mail.google.com/mail/u/0/?fs=1&to=copv1110@gmail.com&su=SUBJECT&body=BODY&tf=cm"
						target="_blank"
						rel="noreferrer"
					>
						<span style={{ '--color': '#fbbc05' }}>
							<SiGmail />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;

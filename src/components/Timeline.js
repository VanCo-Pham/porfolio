const Timeline = () => {
	return (
		<section className="timeline">
			<div
				data-aos="zoom-in-right"
				data-aos-delay="1000"
				className="timeline-container down swing-bottom-fwd"
				style={{ '--p': 1 }}
			>
				<div className="timeline-content">
					<h2>2016</h2>
					<p>Graduate from Dalat University - Biotech.</p>
				</div>
			</div>
			<div
				data-aos="zoom-in"
				data-aos-delay="2000"
				className="timeline-container down swing-bottom-fwd"
				style={{ '--p': 2 }}
			>
				<div className="timeline-content">
					<h2>2016 - 2018</h2>
					<p>Greenhouse Superviser. Author of Kienthuc3d.com</p>
				</div>
			</div>
			<div
				data-aos="zoom-in-left"
				data-aos-delay="3000"
				className="timeline-container down swing-bottom-fwd"
				style={{ '--p': 3 }}
			>
				<div className="timeline-content">
					<h2>2019 - 2020</h2>
					<p>Quality Assurance at Rentokil VN.</p>
				</div>
			</div>
		</section>
	);
};

export default Timeline;

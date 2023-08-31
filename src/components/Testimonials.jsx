import React, { useState } from 'react';
// import * as Material from "@mui/material";

// IMPORT SUBCOMPONENTS
import { FirstAvatar, SecondAvatar, ThirdAvatar } from './TestimonialAvatars'; // Adjust the path accordingly

// IMPORT ICONS
import MailOutlineIcon from '@mui/icons-material/MailOutline';

// IMPORT STYLING
import {
	testimonialsContainer,
	testimonialsButtonSpan,
	pageContainer,
	testimonialsButton,
	testimonialsBox,
	testimonialsTitle,
	center,
	card,
	userCard,
	userCardStats,
	points,
	moreInfo,
	moreInfoTitle,
	coords,
	coordsSpan,
	stats,
	statsTitle,
	value,
	general,
	more,
	testimonialsSubtitle,
} from './Styles';

// This function renders Testimonials content of web app
function Testimonials({ props }) {
	// State to track hovering over the reference card
	const [hover, setHover] = useState(false);
	// Event handler for mouse entering the reference card
	const handleMouseEnter = () => {
		setHover(true);
	};

	// Event handler for mouse leaving the reference card
	const handleMouseLeave = () => {
		setHover(false);
	};

	// Styling for when the user hovers over the reference card
	const additionalStyles = {
		position: 'absolute',
		width: hover ? '100%' : '150px',
		height: '100%',
		background: hover
			? 'linear-gradient( rgba(63,94,251,1) 0%, rgba(134,70,252,1)100%)'
			: 'linear-gradient( rgba(63,94,251,1) 0%, rgba(134,70,252,1)100%)',
		transition: 'width 0.4s',
		overflow: 'hidden',
		zIndex: 2,
		borderRadius: hover ? '0 5px 5px 0' : 'none',
	};
	// State and buttons for controlling testimonials page navigation
	const [testimonialsState, setTestimonialsButtonState] = React.useState({
		Resume: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
		Contact: { boxShadow: '0 4px 10px rgba(255, 255, 255, 0.0)' },
	});
	const testimonialsButtons = [
		{ target: 'Resume', span: 'Back', name: 'Resume' },
		{ target: 'Contact', span: 'Next', name: 'Contact' },
	];

	// Function to set the button style when hovering
	function setTestimonialsHoverButton(name, style) {
		let obj = Object.assign({}, testimonialsState);
		obj[name] = style;
		setTestimonialsButtonState(obj);
	}

	return (
		<React.Fragment>
			{/* Testimonials Container */}
			<div
				className="testimonialsContainer pageContainer"
				style={{ ...testimonialsContainer, ...pageContainer }}
			>
				<div
					style={{
						display: 'flex',
						width: '100%',
						height: '100px',
						flexDirection: 'horizontal',
						justifyContent: 'space-between',
					}}
				>
					<div className="testimonialsTitle" style={testimonialsTitle}>
						REFERENCES:{' '}
						<span style={testimonialsSubtitle}>What's the sitch?</span>
					</div>
				</div>

				<div className="testimonialsBox" style={testimonialsBox}>
					{/* === CARD 1 === */}
					<div className="card first" style={card}>
						<div
							className="additional first"
							style={additionalStyles}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="user-card" style={userCard}>
								<div
									className="points center"
									style={{
										...userCardStats,
										...center,
										...points,
									}}
								>
									Level 37
								</div>
								{/* === CLIP ART === */}
								<FirstAvatar />
							</div>
							{/* BACKSIDE OF CARD */}
							<div
								style={{
									color: 'white',
									textAlign: 'center',
									padding: '5px',
								}}
							>
								<div className="more-info" style={moreInfo}>
									<h1 style={moreInfoTitle}>Robert Baker</h1>
									<div id="title">Software Architect</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											Boeing, BR&T:
										</span>
										<span style={coordsSpan}>
											Joined 2015
										</span>
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											Seattle, WA
										</span>
									</div>
									<div className="stats" style={stats}>
										<div>
											<div style={statsTitle}>
												<MailOutlineIcon
													style={{
														verticalAlign: 'middle',
													}}
												/>{' '}
												Email:{' '}
												<span style={value}>
													{' '}
													robert.s.baker2@boeing.com{' '}
												</span>
											</div>
										</div>

										<div></div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Robert Baker</h1>
							<p>
								Specialized in VR applications, photogrammetry,
								and manipulations of scientific photographic
								equipment in an aerospace manufacturing
								environment.
							</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>

					{/* <!-- CARD 2 --> */}
					<div className="card second" style={card}>
						<div
							className="additional secondAdd"
							style={additionalStyles}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="user-card" style={userCard}>
								<div
									className="points center"
									style={{
										...userCardStats,
										...center,
										...points,
									}}
								>
									Level 41
								</div>
								{/* === CLIP ART === */}
								<SecondAvatar />
							</div>
							{/* BACKSIDE OF CARD */}
							<div
								style={{
									color: 'white',
									textAlign: 'center',
									padding: '5px',
								}}
							>
								<div className="more-info" style={moreInfo}>
									<h1 style={moreInfoTitle}>
										Kenneth Gottlieb
									</h1>
									<div id="title">
										Senior Software Engineer
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											NinjaTrader:{' '}
										</span>
										<span style={coordsSpan}>
											Joined 2023
										</span>
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											Houston, TX
										</span>
									</div>
									<div className="stats" style={stats}>
										<div>
											<div style={statsTitle}>
												<MailOutlineIcon
													style={{
														verticalAlign: 'middle',
													}}
												/>{' '}
												Email:{' '}
												<span style={value}>
													{' '}
													kenneth.gottlieb@ninjatrader.com{' '}
												</span>
											</div>
										</div>

										<div></div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Kenneth Gottlieb</h1>
							<p>
								Principal Software Engineer with over 20 years
								of experience working across multiple
								development technologies and platforms.
							</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>

					{/* <!-- CARD 3 --> */}
					<div className="card third" style={card}>
						<div
							className="additional thirdAdd"
							style={additionalStyles}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="user-card" style={userCard}>
								<div
									className="points center"
									style={{
										...userCardStats,
										...center,
										...points,
									}}
								>
									Level 29
								</div>
								{/* === CLIP ART === */}
								<ThirdAvatar />
							</div>
							{/* BACKSIDE OF CARD */}
							<div
								style={{
									color: 'white',
									textAlign: 'center',
									padding: '5px',
								}}
							>
								<div className="more-info" style={moreInfo}>
									<h1 style={moreInfoTitle}>Alexa Zylstra</h1>
									<div id="title">
										Full Stack Data Analyst
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>HCA: </span>
										<span style={coordsSpan}>
											Joined: 2018
										</span>
									</div>
									<div className="coords" style={coords}>
										<span style={coordsSpan}>
											Nashville, TN
										</span>
									</div>
									<div className="stats" style={stats}>
										<div>
											<div style={statsTitle}>
												<MailOutlineIcon
													style={{
														verticalAlign: 'middle',
													}}
												/>{' '}
												Email:{' '}
												<span style={value}>
													{' '}
													zylstra.az@gmail.com{' '}
												</span>
											</div>
										</div>

										<div></div>
									</div>
								</div>
							</div>
						</div>
						{/* === FRONT BLERP ON CARD === */}
						<div className="general" style={general}>
							<h1 className="cardHeader">Alexa Zylstra</h1>
							<p>
								Full Stack data scientist working on machine
								learning solutions for healthcare problems.
								Productionalizes models via cloud based
								deployment in GCP.
							</p>
							<span className="more" style={more}>
								Mouse over the card for more info
							</span>
						</div>
					</div>
				</div>

				{/* END OF CONTAINER DIV */}
			</div>{' '}
			{/* BUTTON SPAN */}
			<div id="testimonialsButtonSpan" style={testimonialsButtonSpan}>
				{testimonialsButtons.map(function (element, index) {
					return (
						<button
							className="testimonialsButton"
							key={`testimonialsButton${index}`}
							name={element.name}
							style={{
								...testimonialsButton,
								...testimonialsState[element.name],
							}}
							onMouseEnter={(event) => {
								//console.log(event.target.name);
								setTestimonialsHoverButton(event.target.name, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.7)',
								});
							}}
							onMouseLeave={(event) => {
								setTestimonialsHoverButton(event.target.name, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.0)',
								});
							}}
							onClick={function () {
								props.setActivePage(element.target);
								setTestimonialsHoverButton(element.target, {
									boxShadow:
										'0 4px 10px rgba(255, 255, 255, 0.0)',
								});
							}}
						>
							<span>{element.span}</span>
						</button>
					);
				})}
			</div>
		</React.Fragment>
	);
}

export default Testimonials;

import { css, keyframes } from 'styled-components';

export const appContainer = {
	display: 'flex',
	position: 'absolute',
	left: 'calc(50% - 600px)',
	height: '100vh',
	top: '0',
	transition: 'all 1.5s ease',
	maxWidth: '1200px',
	minWidth: '1200px',
	fontFamily: 'roboto',
};
export const pagesContainer = {
	height: '800px',
	display: 'flex',
	flexDirection: 'column',
	maxWidth: '1200px',
	minWidth: '1200px',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};

export const pageContainer = {
	display: 'flex',
	minHeight: '800px',
	maxHeight: '800px',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};

/* ============================== LOGO SLIDING SECTION ============================== */
export const logoSliderContainer = {
	position: 'absolute',
	color: 'white',
	background: `linear-gradient(
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.25)
    )`,
	height: '120vh',
	width: '350px',
	borderRadius: '250px',
	left: '5%',
	top: '35%',
};
export const logoSliderImage = {
	pointerEvents: 'none',
	position: 'relative',
	width: '300px',
	height: '300px',
	display: 'inline-block',
	top: '15px',
	borderRadius: '50%',
	left: '24px',
	transition: 'all 1.5s ease',
	//border: '15px solid rgba(255, 255, 255, 0.5)',
};
export const logoSliderCircle = {
	position: 'absolute',
	color: 'white',
	border: ' 5px solid white',
	height: '400px',
	width: '400px',
	borderRadius: '50%',
	left: '-26px',
	bottom: '-30px',
	boxShadow: '0 0 30px 15px white',
	display: 'block',
	transition: 'all 0.5s ease',
	opacity: '0',
};
/* ============================== LANDING SECTION ============================== */
export const landingContainer = {
	minHeight: '800px',
	overflow: 'hidden',
	marginBottom: 'calc(50vh - 400px)',
};
export const landingHeader = {
	position: 'relative',
	color: 'white',
	left: '40%',
	top: '30%',
	height: '50px',
	fontSize: '50px',
	fontFamily: 'Roboto',
};
export const landingText = {
	display: 'inline-block',
	fontSize: '32px',
	position: 'relative',
	left: '40%',
	top: '40%',
	color: 'white',
	marginTop: '15px',
	width: '400px',
};
export const landingTitle = {
	border: 'solid 1px white',
	borderRadius: '36px',
	padding: '5px',
	display: 'block',
	textAlign: 'center',
	letterSpacing: '5px',
	fontFamily: 'Roboto',
};
export const landingSubtitle = {
	marginTop: '15px',
	borderRadius: '36px',
	width: '400px',
	padding: '5px',
	display: 'block',
	fontFamily: 'Roboto',
};

export const landingButton = {
	color: 'white',
	padding: '7px',
	backgroundColor: 'transparent',
	border: 'none',
	fontSize: '50px',
	cursor: 'pointer',
};
/* { NAME ANIMATION } */
export const letter = {
	display: 'inline-block',
	opacity: '1',
};
/* ============================== ABOUT SECTION ============================== */

// export const aboutContainer = {
// 	display: 'flex',
// 	fontSize: '50px',
// 	color: 'white',
// };

export const aboutTitle = {
	color: 'white',
	transition: 'all .2s ease',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	width: '440px',
	left: '2.5%',
	top: '65%',
	position: 'relative',
};
export const aboutContent = {
	width: '700px',
	height: '650px',
	position: 'relative',
	padding: '20px',
	borderRadius: '36px',
	background: ' rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	fontSize: '18px',
	color: 'white',
	lineHeight: '1.35',
	fontFamily: 'Roboto',
	overflow: 'hidden',
};
export const aboutSubtitle = {
	padding: '15px',
	fontSize: '20px',
	color: 'white',
	lineHeight: '1.35',
	fontFamily: 'Roboto',
	fontWeight: 'bold',
	textAlign: 'center',
};
export const skillSubtitle = {
	padding: '10px',
	fontSize: '18px',
	color: 'white',
	fontFamily: 'Roboto',
	textAlign: 'left',
	backgroundColor: '#99b3fc',
	width: 'fit-content',
	borderRadius: '36px',
	marginBottom: '5px',
	fontWeight: 'bold',
};
export const aboutText = {
	padding: '10px',
	textIndent: '35px',
};

export const techBox = {
	color: 'white',
	top: '148vh',
	left: '55%',
	fontSize: '16px',
	marginTop: '15px',
};
export const skillBox = {
	color: 'white',
	top: '155vh',
	left: '55%',
	fontSize: '16px',
	marginTop: '15px',
};
export const aboutBubbleItem = {
	textDecoration: 'none',
	borderRadius: '36px',
	border: '1px solid #EEEEEE',
	color: 'white',
	display: 'inline-block',
	position: 'relative',
	margin: '10px 10px 10px 10px',
	textAlign: 'center',
	listStyle: 'none',
	padding: '10px',
	width: 'fit-content',
	transition: '0.25s',
};

export const aboutButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
export const buttonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '700px',
	height: '150px',
};
export const fadeTransition = {
	transition: `ease 2s`,
	position: 'absolute',
	top: 0,
	left: 0,
	padding: '20px',
	height: '650px',
};

/* ============================== EDUCATION SECTION ============================== */
export const eduButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '380px',
	height: '150px',
};

export const eduButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};

export const orbitalContainer = {
	height: '780px',
	width: '600px',
	opacity: '0',
	position: 'relative',
	transition: 'all 1s ease',
	display: 'flex',
	alignItems: 'center',
	left: '-120px',
	top: '50px',
};

export const orbitalBox = {
	offsetPath: `path('M150,0 A150,150 0 1,1 150,300 A150,150 0 1,1 150,0')`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'absolute',
	width: '600px',
	height: '150px',
	left: '190px',
	marginBottom: '150px',
	cursor: 'pointer',
	borderRadius: '36px',
};

export const eduTitle = {
	position: 'absolute',
	color: 'white',
	transition: 'all .2s ease',
	paddingBottom: '125px',
	textAlign: 'center',
	margin: '0',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',

	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};

export const eduDescriptionHeader = {
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	fontSize: '25px',
	paddingTop: '20px',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};

export const cardContainer = {
	width: '400px',
	display: 'flex',
	transition: 'all 1s ease',
	flexDirection: 'column',
	overflow: 'hidden',
};

export const eduHeader = {
	transition: 'all 0.2s ease',
	padding: '5px',
	color: 'white',
	fontSize: '22px',
	textAlign: 'center',
	alignItems: 'center',
	display: 'flex',
	fontFamily: 'Roboto',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};

export const eduCardActive = {
	height: 'fit-content',
	fontFamily: 'Roboto',
	padding: '15px',
	justifyContent: 'center',
	textAlign: 'center',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 20px rgba(255, 255, 255, 0.5)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.8)',
};

export const eduCardInactive = {
	height: 'fit-content',
	fontFamily: 'Roboto',
	padding: '15px',
	justifyContent: 'center',
	textAlign: 'center',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
};
export const eduImage = {
	display: 'flex',
	marginLeft: 'auto',
	marginRight: 'auto',
	WebkitFilter: 'drop-shadow(5px 5px 5px #666666)',
	filter: 'drop-shadow(5px 5px 5px #666666)',
};
export const eduImageInactive = {
	width: '150px',
};
export const eduImageActive = {
	width: '250px',
};
export const eduSlideshow = {
	height: 'fit-content',
	fontFamily: 'Roboto',
	fontSize: '20px',
	padding: '15px',
	justifyContent: 'center',
	textAlign: 'center',
	color: 'white',
	display: 'flex',
	width: '350px',
	position: 'relative',
	cursor: 'pointer',
	borderRadius: '36px',
	margin: '15px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: ' blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.3)',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	listStyleType: 'none',
};

/* ============================== SVG PATH SECTION ============================== */
export const svgContainer = {
	position: 'absolute',
	top: '360vh',
	left: '250px',
	cursor: 'pointer',
	zIndex: '-1',
};
/* Hide the images by default */
export const mySlides = {
	display: 'block',
	animationName: 'fade',
	animationDuration: ' 1.5s',
};
export const myEduActive = {
	display: 'block',
	animationName: 'fade',
	animationDuration: ' 1.5s',
};
export const myEduInactive = {
	display: 'none',
	animationName: 'fade',
	animationDuration: ' 1.5s',
};
export const svgCord = {
	width: '120vh',
	height: '120vh',
	pointerEvents: 'none',
};

export const animateSvgStroke1 = {
	'@WebkitKeyframes animateSvgStroke1': {
		'0%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'100%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
	'@keyframes animateSvgStroke1': {
		'0%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'100%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
	'@keyframes animateSvgStrokeReverse': {
		'100%': {
			strokeDashoffset: '2515.90478515625px',
			strokeDasharray: '2515.90478515625px',
		},
		'0%': {
			strokeDashoffset: '0',
			strokeDasharray: '2515.90478515625px',
		},
	},
};
/* ============================== PROJECTS SECTION ============================== */
// export const projectContainer = {
//   display: "flex",
//   height: "100vh",
// };
export const projectsButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '450px',
	height: '150px',
};
export const projectsButton = {
	borderRadius: '36px',
	border: '1px solid white',
	// position: 'relative',
	textAlign: 'center',
	listStyle: 'none',
	width: '120px',
	// top: '202vh',
	// left: '5%',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
export const projectContainer = {
	display: 'flex',
	flexDirection: 'column', // Stack content vertically
	alignItems: 'center', // Center horizontally
	justifyContent: 'center', // Center vertically
	// minHeight: "100vh",
	fontFamily: 'Roboto',
	// position: 'absolute',
};
/* LEFT SIDE COMPUTER SECTION STARTS */
/* ABOUT ME page title */
export const projectTitle = {
	position: 'relative',
	color: 'white',
	transition: 'all .2s ease',
	textAlign: 'center',
	marginTop: '50px',
	marginBottom: '25px',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',

	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};
/* about me text blerb */
export const projectContent = {
	fontFamily: 'roboto',
	position: 'relative',
	height: '400px',
	width: '450px',
	lineHeight: '1.25',
	borderRadius: '36px',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	border: ' 1px solid rgba(255, 255, 255, 0.3)',
	fontSize: '20px',
	color: 'white',
	padding: '15px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const textSlideshow = {
	//maxWidth: '1000px',
	position: 'relative',
	padding: '15px',
	right: '5px',
};
/* Hide the images by default */
export const projectSlides = {
	display: 'none',
	height: '400px',
	width: '400px',
};
export const slideTitle = {
	//padding: '5px',
	fontSize: '26px',
	textAlign: 'center',
	fontWeight: 'bold',
};
/* project github icon */
export const iconContainer = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};
export const github = {
	fontSize: '40px',
};
// export const keyframes = {
//   "#github": {
//     animationDelay: "0.1s",
//   },
//   "@keyframes animate": {
//     from: {
//       filter: "hue-rotate(0deg)",
//     },
//     to: {
//       filter: "hue-rotate(360deg)",
//     },
//   },
// };
/* ===============RIGHT SIDE COMPUTER SECTION STARTS */
/* computer image */
export const computer = {
	pointerEvents: 'none',
	position: 'relative',
	// top: '150px',
	width: '600px',
	height: '600px',
	display: 'inline-block',
	// bottom: '1vh',
	// right: '130px',
	left: '15px',
	transition: 'all 1.5s ease',
};
export const computerImage = {
	//height: '325px',
	width: '550px',
	height: '310px',
	left: '35px',
	top: '55px',
	position: 'absolute',

	//bottom: '50%',
	//right: '-15px',
};
/* Computer container */
export const computerContainer = {
	display: 'flex',
	position: 'relative',
	height: '600px',
	width: '600px',
	marginTop: '100px',
	//top: '10px',
};
/* Slideshow container */

/* Next & previous buttons */
export const arrows = {
	cursor: 'pointer',
	position: 'absolute',
	top: '30%',
	width: 'auto',
	marginTop: '22px',
	padding: '16px',
	color: 'white',
	fontSize: '60px',
	transition: '0.6s ease',
	borderRadius: '0 3px 3px 0',
	userSelect: 'none',
};
/* Position the "next button" to the right */
export const next = {
	right: '-75px',
	//top: '22vh',
	borderRadius: '3px 0 0 3px',
};
export const prev = {
	left: '-45px',
	//top: '22vh',
	borderRadius: '3px 0 0 3px',
};
// export const textNext = {
//     left: '455px',
//     borderRadius: '3px 0 0 3px',
// }
/* The dots/bullets/indicators */
// export const dotContainer = {
// 	textAlign: 'center',
// 	marginTop: '-400px',
// 	marginRright: '35px',
// };
// export const dot = {
// 	cursor: 'pointer',
// 	height: '15px',
// 	width: '15px',
// 	margin: '0 2px',
// 	backgroundColor: '#bbb',
// 	borderRadius: '50%',
// 	display: 'inline-block',
// 	transition: 'background-color 0.6s ease',
// };
// export const activeDot = {
// 	backgroundColor: '#0072ff',
// };
/* Fading animation */
export const fade = {
	animationName: 'fade',
	animationDuration: '1.5s',
};
// /* // TODO: add to styles.jsx */
// @keyframes fade {
//     from {
//         opacity: 0.4;
//     }
//     to {
//         opacity: 1;
//     }
// }
// export const startButton = {
//   borderRadius: "36px",
//   border: "solid 1px white",
//   position: "relative",
//   textAlign: "center",
//   listStyle: "none",
//   width: "125px",
//   top: "65vh",
//   left: "5",
//   height: "65px",
//   color: "white",
//   fontSize: "18px",
//   cursor: "pointer",
// };
export const mouseContainer = {
	// bottom: "-25vh",
	bottom: '125vh',
	// position: 'absolute',
	position: 'relative',
	left: '25%',
	cursor: 'pointer',
	// top: '5vh'
};
export const mouse = {
	posiiton: 'absolute',
	color: 'white',
	fontSize: '170px',
	// position: "static",
	cursor: 'pointer',
	// marginRight: '100px',
};
export const mouseBtn = {
	wordBreak: 'break-all',
	width: '100px',
	fontSize: '30px',
	cursor: 'pointer',
};
export const mouseBtnText = {
	wordBreak: 'break-all',
	width: '90px',
	fontSize: '26px',
	marginLeft: '-270px',
	marginBottom: '100px',
	lineHeight: 'initial',
};
/* ============================== RESUME SECTION ============================== */
export const resumeButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '800px',
	height: '150px',
};
export const resumeButton = {
	borderRadius: '36px',
	border: '1px solid white',
	// position: 'relative',
	textAlign: 'center',
	listStyle: 'none',
	width: '150px',
	// top: '202vh',
	// left: '5%',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '30px',
};
export const resumeContainer = {
	// backgroundColor: "purple",
	flexDirection: 'column',
};
export const resumeTitle = {
	//position: 'absolute',
	color: 'white',
	transition: 'all .2s ease',
	//paddingBottom: '125px',
	textAlign: 'center',
	margin: '0',
	alignItems: 'center',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	minWidth: '50%',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
};
export const resumeBox = {
	display: 'flex',
	//flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	//bottom: '45vh',
	position: 'relative',
	width: '100%',
};

/* typing animation */
export const typingContainer = {
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	fontSize: '36px',
	color: 'white',
	padding: '5px',
	fontWeight: 'light',
	letterSpacing: '0.1rem',
	textAlign: 'right',
	//overflow: 'hidden',
	// marginTop: "75px",
	//position: 'absolute',
	display: 'flex',
	justifyContent: 'end',
	minWidth: '50%',

	height: '50px',
	maxWidth: '50%',
};
/* snippet of code for resume */
export const codeBox = {
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
	flexWrap: 'wrap',
	display: 'flex',
	position: 'relative',
	//padding: '20px',
	height: '600px',
	width: '100%',
	overflow: 'hidden',
	//top: '38vh',
	// top: "32vh",
	//right: '75px',
	fontSize: '18px',
	borderRadius: '36px',
	background: 'rgba(0, 0, 0, 0.4)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	WebkitBackdropFilter: 'blur(5px)',
	border: '1px solid rgba(255, 255, 255, 0.6)',
};
export const codeContent = {
	position: 'absolute',
	margin: '35px',
	minWidth: '1130px',
	maxWidth: '1130px',
	overflow: 'auto',
	height: '500px',
	whiteSpace: 'pre-wrap',
	overflowWrap: 'normal',
	//WordWrap: 'normal,',
};
export const resumePlainText = {
	color: 'white',
	fontFamily: 'roboto',
	borderRadius: '25px',
	//background: 'white',
	position: 'absolute',
	margin: '35px',
	minWidth: '1130px',
	maxWidth: '1130px',
	overflow: 'auto',
	height: '500px',
	whiteSpace: 'pre-wrap',
	overflowWrap: 'normal',
	//WordWrap: 'normal,',
};
export const typedText = {
	fontWeight: 'normal',
	color: 'rgba(248, 201, 195, 1)',
};

// Define the blink keyframes
const blink = keyframes`
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
`;
// Define your styles using styled-components syntax
export const codeCursor = css`
	display: inline-block;
	background-color: #ccc;
	margin-left: 0.1rem;
	width: 3px;
	animation: ${blink} 1s infinite;
`;

export const downloadBtn = {
	// backgroundColor: "#ffffff",
	height: '80px',
	width: '175px',
	textAlign: 'center',
	position: 'relative',
	transform: 'translateY(-50%)',
	cursor: 'pointer',
	borderRadius: '36px',
	bottom: '-78vh',
	marginRight: '-849px',
};

export const text = {
	font: 'bold 1.25rem/1 helvetica',
	color: 'rgba(153, 179, 252, 1)',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-52%)',
	left: '0',
	right: '0',
};

export const downloadSvg = {
	width: '30px',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%) translateX(-50%)',
	left: '50%',
	right: '0',
	enableBackground: 'new 0 0 25 30',
};

export const resumeLink = {
	textDecoration: 'none',
	color: 'rgba(153, 179, 252, 1)',
};
/* resume plain text */

export const resumeBtn = {
	position: 'relative',
	display: 'inline-flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	textAlign: 'center',
	padding: '10px',
	cursor: 'pointer',
	borderRadius: '36px',
	top: '78vh',
	backgroundColor: 'transparent',
	color: 'white',
	border: 'solid 1px white',
	width: '150px',
	height: '75px',
	fontSize: '18px',
};
export const resumeNextBtn = {
	position: 'relative',
	display: 'inline-flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	textAlign: 'center',
	padding: '10px',
	cursor: 'pointer',
	borderRadius: '36px',
	top: '78vh',
	backgroundColor: 'transparent',
	color: 'white',
	border: 'solid 1px white',
	width: '150px',
	height: '75px',
	fontSize: '18px',
};
export const textBtn = {
	position: 'relative',
	display: 'inline-flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	textAlign: 'center',
	padding: '10px',
	cursor: 'pointer',
	borderRadius: '36px',
	top: '78vh',
	backgroundColor: 'transparent',
	color: 'white',
	border: 'solid 1px white',
	width: '150px',
	height: '75px',
	fontSize: '18px',
};
/* ============================== REFERENCE SECTION ============================== */
export const refContainer = {
	display: 'flex',
	position: 'relative',
	fontFamily: 'Roboto',
};

export const refTitle = {
	color: 'white',
	transition: 'all .2s ease',
	display: 'flex',
	fontSize: '80px',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	textAlign: 'center',
	margin: '0',
	minWidth: '50%',
	alignItems: 'center',
};
export const refSubtitle = {
	fontSize: '36px',
	color: 'white',
	fontFamily: 'Roboto',
	textAlign: 'right',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	minWidth: '50%',
	padding: '5px',
	fontWeight: 'light',
	display: 'flex',
	justifyContent: 'end',
	maxWidth: '50%',
};
// box containing ref cards
export const refBox = {
	flexWrap: 'wrap',
	display: 'flex',
	position: 'relative',
	height: '700px',
	width: '100%',
	overflow: 'hidden',
	// fontSize: '18px',
	top: '100px',
	right: '30%',
	// width: '1000px',
	// fontSize: '18px',
	// overflow: 'hidden',
	// justifyContent: 'space-between',
	// alignItems: 'center',
	// width: '1000px',
	// height: '800px',
	// flexDirection: 'column',
};
// USED IN MULTIPLE PLACES ON CARD
export const center = {
	position: 'absolute',
	// margin: '35px',
	// minWidth: '1130px',
	// maxWidth: '1130px',
	// height: '700px',
	top: '50%',
	left: '50%',
	WebkitTransform: 'translate(-50%, -50%)',
};
// EACH CARD STYLING
export const card = {
	width: '800px',
	height: '225px',
	background: 'linear-gradient(#f8f8f8, #fff)',
	boxShadow: '0 8px 16px -8px',
	borderRadius: '6px',
	overflow: 'hidden',
	position: 'relative',
	margin: '5px',
};
// NAME TEXT
export const cardHeader = {
	textAlign: 'center',
};
// BACKGROUND COLOR AND CONTAINS AVATAR ON LEFT OF CARD
export const additional = {
	position: 'initial',
	width: '110px',
	height: '100%',
	transition: 'width 0.4s',
	overflow: 'hidden',
	zIndex: '2',
	background: `radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(134,70,252,1) 100%)`,
};

// .card .additional .user-card::after {
export const userCard = {
	width: '150px',
	height: '100%',
	position: 'relative',
	float: 'left',
	borderLeft: '2px solid rgba(0,0,0,0.025)',
	// },
};
export const userCardStats = {
	top: '15%',
	color: '#fff',
	textTransform: 'uppercase',
	fontSize: '0.75rem',
	fontWeight: 'bold',
	background: 'rgba(0, 0, 0, 0.15)',
	padding: '0.125rem 0.75rem',
	borderRadius: '100px',
	whiteSpace: 'nowrap',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
// .card .additional .user-card .points
export const points = {
	top: '85%',
	position: 'relative',
	textAlign: 'center',
	width: '50%',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const cardImage = {
	top: '50%',
	width: '110px',
	height: '110px',
};
export const moreInfo = {
	width: '350px',
	float: 'left',
	position: 'absolute',
	left: '150px',
	fontSize: '16px',
	color: 'white',
	height: '100%',
	textAlign: 'center',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const moreInfoTitle = {
	color: 'white',
	marginBottom: '30px',
	fontSize: '30px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const coords = {
	margin: '0 1rem',
	color: 'white',
	fontSize: '18px',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const coordsSpan = {
	float: 'center',
	textAlign: 'center',
};

export const stats = {
	fontSize: '18px',
	display: 'inline-block',
	textAlign: 'center',
	position: 'absolute',
	bottom: '1rem',
	left: '1rem',
	right: '1rem',
	top: 'auto',
	color: '#fff',
	padding: '10px',
	width: '100%',
	textShadow: `2px 2px rgba(0,0,0,0.1)`,
};
// .card .additional .stats > div {
export const statsTitle = {
	flex: '1',
	fontSize: '18px',
	textAlign: 'left',
	color: '#fff',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
};

export const value = {
	fontWeight: 'light',
	fontSize: '16px',
	textAlign: 'left',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
	width: '100%',
};

// .card .general {
export const general = {
	width: '400px',
	height: '100%',
	position: 'absolute',
	right: '10px',
	top: '0',
	zIndex: '1',
	boxSizing: 'border-box',
	padding: '1rem',
	paddingTop: '0',
	textAlign: 'center',
	color: '#333333',
	textShadow: `1px 1px rgba(0,0,0,0.1)`,
};
export const more = {
	position: 'absolute',
	bottom: '1rem',
	right: '1rem',
	fontSize: '0.9rem',
	color: 'gray',
};
export const testimonialsButtonSpan = {
	display: 'flex',
	justifyContent: 'space-around',
	flexDirection: 'row',
	width: '400px',
	bottom: '225px',
	position: 'relative',
	left: '30%',
	height: '150px',
};
export const testimonialsButton = {
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	listStyle: 'none',
	width: '120px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	// marginTop: '30px',
};
/* ============================== CONTACT SECTION ============================== */
export const contactContainer = {
	display: 'flex',
	position: 'relative',
	fontFamily: 'Roboto',
	marginTop: 'calc(50vh - 400px)',
	marginBottom: 'calc(50vh - 400px)',
};
export const contactTitle = {
	color: 'white',
	transition: 'all .2s ease',
	display: 'flex',
	fontSize: '80px',
	fontFamily: 'Roboto',
	textShadow: `4px 4px rgba(0,0,0,0.1)`,
	position: 'relative',
	// top: '-50px',
	height: '100px',
	justifyContent: 'center',
};

/*---------------- Name drawing --------------------> */

export const thanksText = {
	textAlign: 'center',
	display: 'flex',
	position: 'relative',
	flexDirection: 'column',
	fontSize: '26px',
	color: 'white',
	fontWeight: 'light',
	height: '100px',
};
export const myPath = {
	fill: 'none',
	stroke: 'white',
	strokeWidth: '4',
	width: '75%',
};
export const lineDrawing = {
	position: 'relative',
	display: 'flex',
};
export const svgName = {
	width: '75%',
	height: '500px',
};

/*---------------- FORM --------------------> */
export const contactSubtitle = {
	color: '#3c3c3c',
	transition: 'all .2s ease',
	fontSize: '22px',
	width: '100%',
	position: 'relative',
	padding: '10px',
	marginBottom: '10px',
};
export const formDiv = {
	display: 'flex',
	backgroundColor: 'rgba(72, 72, 72, 0.4)',
	padding: '50px',
	width: '50%',
	MozBorderRadius: '7px',
	WebkitBorderRadius: '7px',
	flexDirection: 'column',
	alignItems: 'center',
	position: 'relative',
	textAlign: 'center',
	height: '725px',
	maxWidth: '600px',
};
export const feedbackInput = {
	color: '#3c3c3c',
	fontFamily: 'Helvetica, Arial, sans-serif',
	fontWeight: '500',
	fontSize: '24px',
	lineHeight: '24px',
	backgroundColor: '#fbfbfb',
	padding: '10px',
	textAlign: 'left',
	width: '100%',
	border: '3px solid rgba(0, 0, 0, 0)',
	// marginBottom: '10px',
	borderRadius: '8px',
};
export const formText = {
	textAlign: 'left',
	fontSize: '26px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '10px',
	display: 'block',
};
export const name = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
};
export const email = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	marginBottom: '20px',
};
export const comment = {
	backgroundSize: '30px 30px',
	backgroundPosition: '11px 8px',
	backgroundRepeat: 'no-repeat',
	padding: '10px',
};

export const textArea = {
	width: '100%',
	height: '150px',
	lineHeight: '22px',
	resize: 'vertical',
};

export const contactButton = {
	display: 'flex',
	justifyContent: 'space-around',
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	width: '450px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
	marginTop: '20px',
};
export const contactButtonSpan = {
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	flexDirection: 'row',
	borderRadius: '36px',
	border: '1px solid white',
	textAlign: 'center',
	width: '150px',
	height: '65px',
	color: 'white',
	fontSize: '18px',
	lineHeight: '1.25',
	backgroundColor: 'transparent',
	cursor: 'pointer',
};
export const ease = {
	width: '0px',
	height: '74px',
	backgroundColor: '#fbfbfb',
	transition: '0.3s ease',
	WebkitTransition: '0.3s ease',
	MozTransition: '0.3s ease',
	OTransition: '0.3s ease',
	msTransition: '0.3s ease',
};

/* ============================== FOOTER SECTION ============================== */
export const footerContainer = {
	position: 'static',
	left: '0',
	right: '0',
	bottom: '0',
	background: 'rgba(255, 255, 255, 0.2)',
	boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(5px)',
	WebkitBackdropFilter: 'blur(5px)',
	marginBottom: 'auto',
	width: '100%',
};
export const siteFooter = {
	padding: '45px 0 20px',
	fontSize: '15px',
	lineHeight: '24px',
	width: '100%',
	textAlign: 'center',
};

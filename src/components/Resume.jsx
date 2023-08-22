import React, { useState, useEffect, useRef } from "react";
// import * as Material from '@mui/material';
import anime from "animejs/lib/anime.es.js";
// import avesLogo from '../assets/aves.png';
import {
  resumeContainer,
  pageContainer,
  resumeTitle,
  typingContainer,
  resumeBox,
  typedText,
  resumeBtn,
  resumeNextBtn,
  downloadBtn,
  textBtn,
  resumeLink,
  text,
  progressBar,
  downloadSvg,
  check,
  codeBox,
  resumePlainText,
} from "./Styles";

function Resume() {
  const pages = [
    "Landing",
    "About",
    "Edu",
    "Projects",
    "Resume",
    "References",
    "Contact",
  ];
  // state
  let currentPage = "Landing";
  let pageIndexObj = {
    Landing: 0,
    About: 1,
    Edu: 2,
    Projects: 3,
    Resume: 4,
    References: 5,
    Contact: 6,
  };

  // sets the active page shown
  const setActivePage = (newPage) => {
    const appContainer = document.getElementsByClassName("appContainer")[0];
    const pageIndex = pages.indexOf(newPage);
    const currentPageIndex = pages.indexOf(currentPage);
    const calculatedVH = pageIndex * 100;
    if (newPage !== currentPage) {
      const pageDiff =
        pageIndex < currentPageIndex
          ? Math.abs(currentPageIndex - pageIndex)
          : Math.abs(pageIndex - currentPageIndex);
      pages.forEach(
        (element, index) =>
          (pageIndexObj[element] = index - pages.indexOf(newPage))
      );
      currentPage = newPage;
      console.log(pageIndexObj);
      console.log(pageDiff);
      appContainer.style.transition = `all ${pageDiff * 1.5}s ease`;
      const logoSliderImage =
        document.getElementsByClassName("logoSliderImage")[0];
      const logoSliderCircle =
        document.getElementsByClassName("logoSliderCircle")[0];
      // if > 0, then the page is moving upwards
      if (currentPageIndex - pageIndex > 0) {
        //  changing top prop value to move the image
        if (pageIndex === 0) {
          setTimeout(function () {
            logoSliderImage.style.top = `15px`;
          }, 1200);
          logoSliderCircle.style.opacity = "0";
        }
      } else {
        if (pageIndex >= 1) {
          logoSliderImage.style.top = `calc(100% - 335px)`;
          setTimeout(function () {
            logoSliderCircle.style.opacity = "1";
          }, 1000);
        }
      }
      appContainer.style.top = `calc(0% - ${calculatedVH}vh)`;
    }
  };
  // FIXME: get codeBox to display none when plainText is toggled
  //  state to determine whether the code block should be displayed
  const [showPlainText, setShowPlainText] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  // function to display resume in plain text rather than coded text
  const togglePlainText = () => {
    setShowPlainText(!showPlainText);
  };
  const resumePlainText = showPlainText ? {} : { display: "none" }; // Define your styles here

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    // Add event listener on component mount
    document.addEventListener("DOMContentLoaded", startTypingEffect);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("DOMContentLoaded", startTypingEffect);
    };
  }, []);

  const startTypingEffect = () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  };
  // ====TYPING ANIMATION====
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  // Array of words to show for typing animation
  const textArray = ["hard", "cool", "a journey", "LIFE"];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  // Function to perform the typing effect
  function type() {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;
    if (charIndex < textArray[textArrayIndex].length) {
      if (!isTyping) {
        setIsTyping(true);
      }
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++; // Move to the next character and call the 'type' function again after 'typingDelay' milliseconds

      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing"); // When typing is completed for the current text, remove the 'typing' class from the cursor
      setTimeout(erase, newTextDelay); // Start the erasing effect by calling the 'erase' function after 'newTextDelay' milliseconds
    }
  }
  // Function to perform the erasing effect
  function erase() {
    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;
    // Check if there are characters to erase in the current text
    if (charIndex > 0) {
      // Add the 'typing' class to the cursor element to make it blink
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");

      // Erase the last character from the typedTextSpan
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );

      // Move to the previous character and call the 'erase' function again after 'erasingDelay' milliseconds
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      // When erasing is completed, remove the 'typing' class from the cursor
      cursorSpan.classList.remove("typing");
      // Move to the next text in the textArray
      textArrayIndex++;
      // If all texts in the array have been shown, reset the index to show the first text again
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      // Start typing the next text after a delay of 'typingDelay' + 1100 milliseconds
      setTimeout(type, typingDelay + 1100);
    }
  }
  // Add an event listener to start the typing effect when the DOM is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // On DOM Load initiate the effect
    // If there are texts in the array, start the typing effect after a delay of newTextDelay' + 250 milliseconds
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  });

  return (
    <>
      <div
        className='resumeContainer pageContainer'
        style={Object.assign({}, resumeContainer, pageContainer)}>
        {/* //  style={resumeContainer}> */}

        <h1 className='resumeTitle' style={resumeTitle}>
          Resume
        </h1>

        <div className='typingContainer' style={typingContainer}>
          <p>
            Coding is <span ref={typedTextRef} style={typedText}></span>
            <span ref={cursorRef} className={isTyping ? "typing" : ""}>
              &nbsp;
            </span>
          </p>
        </div>

        <div className='resumeBox' style={resumeBox}>
          <button
            style={resumeBtn}
            className='resumeBtn'
            onClick={() => {
              setActivePage("Projects");
            }}>
            Back{" "}
          </button>
          <button
            onClick={togglePlainText}
            style={textBtn}
            className='textBtn'
            id='showPlainTextBtn'>
            Show Plain Text
          </button>
          <button
            style={resumeNextBtn}
            className='resumeNextBtn'
            onClick={() => {
              setActivePage("References");
            }}>
            Next
          </button>
          <div className='downloadBtn' style={downloadBtn}>
            <div className='text' style={text}>
              <a
                href='../assets/resume.pdf'
                download='resume'
                className='resumeLink'
                style={resumeLink}>
                <pre>
                  <code>{" <Download/>"} </code>
                </pre>
              </a>
            </div>
          </div>
          {/* <div className='progressBar' style={progressBar}>
            <svg
              className='downloadSvg'
              x='0px'
              y='0px'
              viewBox='0 0 25 30'
              style={downloadSvg}>
              <path
                style={check}
                className='check st0'
                d='M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2'
              />
            </svg>
          </div> */}
          {/* === Resume Code Starts Here === */}
          <div className='codeBox' style={codeBox}>
            <code style={{ color: "green" }}>{"class AveryCaldwell { "} </code>
            <pre style={{ color: "yellow" }}>
              {`    constructor() {
    this.name = 'Avery Caldwell';
    this.dayOfBirthTimestamp = 12071993;
    this.email = 'averycaldwell7@gmail.com';
    }`}
            </pre>
            <pre style={{ color: "blue" }}>
              {`workExperience() {
        return [
        {'2020-2023': 'Suspicious Activity Investigator - BSA/AML at BankPlus'},
        {'2018-2020': 'Analyst and Regulatory Specialist - CIP/QA at BankPlus'},
        {'2017-2018': 'Lending Assistant at BankPlus'}
        ];
    }
`}
            </pre>
            <pre style={{ color: "purple" }}>
              {`   education() {
        return [
        {'2022-2023': 'University of Washington - Certificate in Full Stack Development'},
        {'2012-2016': 'Mississippi College - Bachelors of Science in Marketing'},
        {'2015': 'Chung Yuan Christian University - Business Program Certificate'}
        ];
    }`}
            </pre>

            <pre style={{ color: "magenta" }}>
              {`    skills() {
        return [
        'HTML/CSS/JS', 'React', 'Vue', 'Node.js/Express.js', 'Bootstrap, Tailwind, Material UI', 'Vite', 'SCSS',
        'npm', 'PWA', 'SPA', 'Git/Github/Github Pages', 'NativeScript', 'Web-extensions', 'Web Sockets',
        'Firebase', 'PHP', 'MySQL, MongoDB, ORM', 'Wordpress', 'Photoshop, Canva, Davinci Resolve', 'UX/UI',
        'NestJS', 'Jest', 'Apollo', 'Heroku, Insomnia'
        ];
    }
}`}
            </pre>
            {/* <!-- code box --> */}
          </div>
          {/* <!-- PLAIN TEXT RESUME --> */}
          <div className='resumePlainText' style={resumePlainText}>
            <h1>AVERY CALDWELL</h1>
            <ul>
              <li>Seattle, WA </li>
              <li>Phone: 601-506-1057 </li>
              <li>Email: averycaldwell7@gmail.com </li>
              <li>Github: https://github.com/AveryCaldwelll </li>
              <li>
                Portfolio: https://github.com/AveryCaldwell/postgrad-portfolio
              </li>
            </ul>
            <h2>SUMMARY</h2>
            <p>
              Full Stack web developer with a background in banking. Trained at
              University of Washington Coding Bootcamp & earned a certificate in
              full-stack web development. Versatile problem-solver excited about
              expanding knowledge; focused on adaptive design and development.
              Strengths in creativity, teamwork, and building projects
              effectively on all accounts.
            </p>

            <h2>TECHNICAL SKILLS</h2>
            <ul>
              <strong>Technologies:</strong>
              <li>
                {" "}
                JavaScript, HTML, CSS,, React, MERN, MySQL, NoSQL, GraphQL,
                Apollo, MongoDB, Insomnia, Heroku, Postman, OAth, Restful APIs,
                Jest, Git, Github, Gitlab, JSON Web Tokens, Wordpress,
                Passport.js
              </li>
              <strong>Frameworks and Libraries:</strong>
              <li>
                Angular, Vue.js, Anime.js, Material-UI, Bootstrap, Vite,
                Express, jQuery, SASS, Handlebars.js, bcrypt, Node.js, Tailwind
                CSS, Bulma, Next.js, Foundation, Chart.js, D3.js
              </li>
            </ul>

            <h2>PROJECTS</h2>
            <ul>
              <h3>
                <strong>Wear You Wander | </strong>
                https://github.com/AveryCaldwell/WearYouWander |
                https://averycaldwell.github.io/WearYouWander/
              </h3>
              <li>
                Wear You Wander is an application that uses 2 server-side APIs
                with client-side storage to analyze historical weather
                conditions to suggest accommodating outerwear.
              </li>
              <li>
                As Team Lead for this project, I assigned tasks, created the
                concept of the application, worked with both APIs, and
                integrated the team’s work.
              </li>
              <li> HTML, CSS, Foundation Framework, JavaScript, and jQuery</li>

              <h3>
                <strong>Cheers Check |</strong>{" "}
                https://github.com/AveryCaldwell/CheersCheck |
                https://averycaldwell.github.io/CheersCheck/
              </h3>
              <li>
                {" "}
                A new liquor inventory application - the perfect tool for anyone
                who enjoys keeping track of their favorite spirits! You can
                easily organize your liquor collection, keep track of what you
                have on hand.
              </li>
              <li>
                {" "}
                As Team Lead for this project, I assigned tasks, created the
                concept of the application, worked with both APIs, and
                integrated the team’s work.
              </li>
              <li>
                HTML, CSS, Bootstrap, JavaScript, MySQL, Sequelize,
                Handlebars.js. Node, Express, Heroku, and Anime.js jQuery
              </li>

              <h3>
                <strong> TasteBuds | </strong>
                https://github.com/AveryCaldwell/TasteBuds |
                https://taste-buds.herokuapp.com/
              </h3>
              <li>
                A social media app that allows users to never dine alone again!
                This app allows the user to create a profile, see other users
                posts, create posts and comments, and join other events!
              </li>
              <li>
                As a Team Member, I ensured app functionality and that
                acceptance criteria was met, as well as, created the concept of
                the application and integrated the front to the backend.
              </li>
              <li>
                {" "}
                HTML, CSS, Javascript, Tailwind, Express, Node, Heroku, MongoDB,
                Mongoose, MongoCompass, Apollo, GraphQL, React
              </li>
            </ul>
            <h2>EXPERIENCE</h2>

            <h3>
              <strong>Suspicious Activity Investigator - BSA/AML </strong>June
              2018 - Aug 2023 BankPlus Ridgeland, MS{" "}
            </h3>
            <ul>
              <li>
                {" "}
                Streamlined operations by developing and implementing compliance
                procedures and guidelines for cross-functional operations teams,
                resulting in an increase in process efficiency and improved
                collaboration among departments.
              </li>
              <li>
                {" "}
                Utilized critical thinking skills to evaluate risk levels of
                customer behavior, including transactional trends and historical
                statistics, effectively preventing money laundering and ensuring
                regulatory compliance.
              </li>
              <li>
                {" "}
                Protected the company's reputation and financial well-being by
                leading investigations into systemwide suspicious activities
              </li>

              <em>Key Accomplishments:</em>
              <li>
                {" "}
                Played a pivotal role as a liaison to newly acquired banks,
                driving successful training and transition processes.
              </li>
              <li>
                {" "}
                Selected as a distinguished representative to attend the
                esteemed BSA/AML Conference, showcasing the Bank's commitment to
                regulatory compliance and industry best practices.
              </li>
            </ul>

            <h2>EDUCATION</h2>
            <ul>
              <h3>
                Certificate in Full Stack Development: University of Washington,
                Seattle, WA May 2023
              </h3>
              <li>
                A 24 week intensive program focused on gaining skills in front
                end and back end technologies.
              </li>
              <h3>
                Bachelors of Science in Marketing: Mississippi College, Clinton,
                MS 2012-2016
              </h3>
              <h3>
                Business Program Certificate: Chung Yuan Christian University,
                Taipei, Taiwan 2015
              </h3>
              <li>
                {" "}
                A 2 month program focused on gaining international business
                skills and adapting to new environments.
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Resume;

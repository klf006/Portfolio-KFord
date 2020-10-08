import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Kevin Ford', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: ' ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Kevin Ford,',
  subtitle: `and I am the Developer to Hire`,
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'Kevin Ford Resume.png',
  paragraphOne: `I am a former music educator who is looking forward to making the leap into the world of web development!`,
  paragraphTwo: `While I enjoyed my time in education, I am now the father of a wonderful toddler, who has some special needs that could not be met with both my wife and I being school teachers. Due to the aforementioned factors, we decided as a family to make some changes in order to meet these needs.
  `,
  paragraphThree: `Computers and technology in general have always held a special fascination to me, and upon searching into the world of web development, a new passion and curiosity took shape. Please see below for some of the projects I have been working on to date. 
  `,
  resume: 'https://drive.google.com/file/d/1UTAYCS1SyJIaWHGBcUb6eKJnRsanuZmr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Phone Store.png',
    title: 'Phone E-Commerce',
    info:
      'Here you will find an example of a mobile phone online store with a paypal button functionality that connects to a sandbox.',
    info2: 'Built with React, React-Router, Styled Components, CSS, JavaScript, and HTML.',
    url: 'https://phone-store-kford.netlify.app/',
    repo: 'https://github.com/klf006/phone-e-commerce', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'KFord Weather App.png',
    title: 'React Weather App',
    info:
      'The following is a simple weather app designed to be used mainly on phones, but works on desktop as well.',
    info2: `Built with React, OpenWeatherMap API, CSS, JavaScript, and HTML.`,
    url: 'https://react-weather-app-kford.netlify.app/',
    repo: 'https://github.com/klf006/react-weather-app.git', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Smart Brain.png',
    title: 'Face Recognition-Smart Brain',
    info: `This project is designed with a Zoltar type carnival-magic atmosphere in mind. Please enter an image url and click the button.`,
    info2: `Built with React, React-Tilt,  Clarifai API, React-Particles, Tachyons, CSS, JavaScript, and HTML.`,
    url: 'https://smart-brain-kford.netlify.app/',
    repo: 'https://github.com/klf006/smart-brain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Robofriends.png',
    title: 'Robofriends',
    info: `My first React App build which focused on using an API, state, and component lifecycles.`,
    info2: `Built with React, Tachyons, Cufon Fonts, Robohash, and JSON Placeholder API.`,
    url: 'https://klf006.github.io/robofriends/',
    repo: 'https://github.com/klf006/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Color Game.png',
    title: 'Color Game',
    info: `A basic color matching game with a built in RGB color generator. You can select between a six box “hard” version, or an “easier” three box one.`,
    info2: 'Built with HTML, CSS, and JavaScript.',
    url: 'https://codepen.io/klf006/pen/ExawPgy',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Javascript%20Unit/Color%20Game', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Startup Landing Page.png',
    title: 'Startup Landing Page',
    info:
      'One of my first projects, centered around the idea of creating a landing page for a startup business. The buttons and navbar links are intentionally not linked to a source.',
    info2: 'Built with Bootstrap, CSS, HTML, and Font Awesome.',
    url: 'https://landingpage-kford.netlify.app/',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Startup%20Landing%20Page', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Museum of Candy.png',
    title: 'Museum of Candy',
    info: `The focus of this project was design elements, color extremes, and responsiveness.`,
    info2: 'Built with Bootstrap, CSS, HTML, and Google Fonts.',
    url: 'https://museum-of-candy-kford.netlify.app/',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Bootstrap%204/13_Museum_Of_Candy', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Pattern Example.png',
    title: 'Pattern Projects',
    info:
      'Simple pattern projectSimple pattern project to get comfortable with elements of bootstrap.',
    info2: 'Built with HTML and Bootstrap',
    url: 'https://patternproject-kford.netlify.app/',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Bootstrap%204/11_Pattern_Project/Final', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Photo Blog.png',
    title: 'Photo Blog',
    info: 'A basic photo blog example to get comfortable with image sourcing and CSS styling.',
    info2: 'Built with HTML and CSS',
    url: 'https://photogrid-kford.netlify.app/',
    repo: 'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/CSS%20Unit/photoGrid', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I look forward to continuing your companies success as a valued team member!',
  btn: '',
  email: 'kford21yz@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://www.codepen.io/klf006',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kevin-ford-3bab8b1a6',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/klf006',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

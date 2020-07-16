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
  name: 'Kevin Ford',
  subtitle: `I am the Developer to Hire`,
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'logo.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Pattern Example.png',
    title: 'Pattern Projects',
    info: '',
    info2: '',
    url: 'www.cnn.com',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Bootstrap%204/11_Pattern_Project/Final', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Startup Landing Page.png',
    title: 'Startup Landing Page',
    info: '',
    info2: '',
    url: '',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Startup%20Landing%20Page', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Museum of Candy.png',
    title: 'Museum of Candy',
    info: '',
    info2: '',
    url: '',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Bootstrap%20Unit/Bootstrap%204/13_Museum_Of_Candy', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Photo Blog.png',
    title: 'Photo Blog',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/CSS%20Unit/photoGrid', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Color Game.png',
    title: 'Color Game',
    info: '',
    info2: '',
    url: 'https://codepen.io/klf006/pen/ExawPgy',
    repo:
      'https://github.com/klf006/Udemy-Files/tree/master/Bootcamp/Javascript%20Unit/Color%20Game', // if no repo, the button will not show up
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
      url: 'https://codepen.io/klf006',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/kevin-ford-3bab8b1a6',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/klf006',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

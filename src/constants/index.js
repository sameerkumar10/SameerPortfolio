import trystImage from "../assets/company/tryst.png";
import code1Image from "../assets/company/code1.png";
import code2Image from "../assets/company/code2.png";
import expjsImage from "../assets/tech/expjs.png";
import bootImage from "../assets/tech/bootstrap.png";
import img1Image from "../assets/img1.png";
import img2Image from "../assets/img2.png";
import img3Image from "../assets/company/tic-tac-toe.jpg"
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
 
  threejs,
} from "../assets";

export const navLinks = [
  {
    title: "Download My Resume",
    link: "https://drive.google.com/drive/u/4/folders/1L-G5zhHQUBi7T4cBnOppJGHOZqSfTdH2",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mern Stack",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootImage,
  },
  {
    name: "Expressjs",
    icon: expjsImage,
  },
];

const experiences = [
  {
    title: "Campus Ambassdor",
    company_name: "Tryst IIT Delhi (Graphite)",
    icon: trystImage,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "It enables me to collaborate with various new kinds of peoples. ",
      "It helps in my self-communication skills and buildup activity.",
      "Promoted Graphite Tryst events, initiatives, and programs across campus through various channels.",
      
    ],
  },
  {
    title: "Web Developer",
    company_name: "salegully retail private limited",
    icon: code1Image,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborated with senior developers to design, develop, and maintain responsive web applications.",
      "Demonstrated a strong passion for web development and a commitment to continuous learning.",
      "Stayed updated with emerging web technologies and best practices to enhance development processes.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "RungtaTech",
    icon: code2Image,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Communicated effectively with clients to provide project updates, address concerns, and ensure client satisfaction throughout the development process.",
      "Proficient in front-end technologies including HTML, CSS, JavaScript, and modern JavaScript frameworks like React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Familiarity with version control systems like Git for code management and collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "WON SMART INDIA HACKATHON In 2023, I am a part of winning team at the Smart India Hackathon, developing a website to streamline scholarship applications for students. Using React.js, Node.js, and MongoDB, we crafted an innovative solution.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Additionally, I secured victories at the HackBios and CodeFiesta Hackathons, showcasing my ability to innovate and deliver impactful solutions within constrained timeframes. Moreover, my expertise in utilizing the Postman API earned recognition with the Postman API Awards.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "As a 4-star coder on HackerRank and avid coding enthusiast, I've deployed and built Many web application projects,complemented by a plethora of certifications And also i am an Coding Enthusiast.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Forkify",
    description:
      "This Meal Recipe Website, crafted with JavaScript, HTML, and CSS, features dynamic functionality allowing users to browse and order meals effortlessly. Its aesthetic simplicity enhances usability, providing a seamless experience for users to explore recipes and place orders with ease",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "DummyFirebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: img1Image,
    source_code_link: "https://forkify-sam-10.netlify.app/",
  },
  {
    name: "React Tourism",
    description:
      " This dynamic website utilizes the React library for enhanced efficiency, offering real-time database functionality. Hosted on Firebase, it employs a dummy Firebase API backend. Despite its simplicity, it serves as a valuable addition to my project portfolio, showcasing practical web development skills ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: img2Image,
    source_code_link: "https://userdata-8085e.web.app/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      " Experience the classic game of Tic Tac Toe in a user-friendly interface crafted with pure JavaScript, HTML, and CSS. Enjoy seamless gameplay as you challenge friends or test your skills against the computer. With intuitive design and smooth interactions, this game provides hours of entertainment for players of all ages ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: img3Image,
    source_code_link: "https://tictactoesam10.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

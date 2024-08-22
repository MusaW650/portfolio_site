import project1 from "../assets/projects/mosque.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/CAC.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer currently pursuing a degree in Computer Science at the University of Maryland, College Park, with a minor in Cybersecurity through the ACES program. My interests lie in using coding as a tool to explore and amplify cultural narratives, especially those of underrepresented communities. With hands-on experience in both academic and professional settings, I strive to create innovative solutions that not only drive business growth but also foster inclusivity and understanding.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a strong academic foundation as a Junior at the University of Maryland, College Park, majoring in Computer Science and minoring in Cybersecurity through ACES. My passion for coding goes beyond technical proficiency; it is deeply rooted in my desire to explore and uplift cultural narratives, particularly those of underrepresented groups. I have worked with a variety of technologies, including React, Node.js, MySQL, MongoDB, Flutter, and Firebase, and am constantly seeking new challenges that allow me to merge my technical skills with my cultural interests. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects that align with my values.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Engineering Intern",
    company: "ShareECare",
    description: `Developed and tested authentication RESTful APIs using Node.js, Express, MySQL, and React, enabling secure access for users across 400+ countries. Integrated PayPal Braintree gateways, improving payment processing efficiency by 25%.`,
    technologies: ["Node.js", "Express", "MySQL", "React", "PayPal Braintree"],
  },
  {
    year: "May 2023 - Present",
    role: "Co-Founder & CTO",
    company: "Qawl.io",
    description: `Built an innovative Arabic audio-based social media app with Google Dart/Flutter and Firebase NoSQL backend. Deployed app on iOS and Google Play stores, currently used by 300+ users across 25+ countries.`,
    technologies: ["Dart", "Flutter", "Firebase", "NLP", "TensorFlow"],
  },
  {
    year: "May 2023 - April 2024",
    role: "Software Development Intern",
    company: "University of Maryland Applied Research Lab for Intelligence & Security",
    description: `Leveraged Node.js, Python, and SQL to implement semantic labeling UI for DOM elements in Apache Flagon, increasing efficiency of synchronous log analysis by over 30%. Led UI design within AGILE environment.`,
    technologies: ["Node.js", "Python", "SQL", "Figma", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "PathwayLearning Platform",
    image: project1,
    description:
      "A cultural learning platform featuring interactive modules tailored for Sunday school students, with secure JWT-based authentication and real-time leaderboard functionalities. Presenting to local school with 150+ students.",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "JWT"],
  },
  {
    title: "AI Task Wizard",
    image: project2,
    description:
      "A web app built with Next.js, React, and OpenAI API to efficiently plan daily activities with customizable input and subtask management, deployed on Vercel.",
    technologies: ["Next.js", "React", "OpenAI API", "Vercel"],
    link:'https://task-wizard-v743.vercel.app'
  },
  {
    title: "Pensando Gobierno",
    image: project3,
    description:
      "A mobile app developed using Swift and UIKit to provide civic education resources to Spanish-speaking immigrants, winner of the Congressional App Challenge. Presented to 500+ staffers and members of congress.",
    technologies: ["Swift", "UIKit", "Xcode"],
    link:'https://www.congressionalappchallenge.us/20-md06/'
  },
];

export const CONTACT = {
  address: "College Park, MD",
  phoneNo: "240-707-7718",
  email: "musaw650@gmail.com",
};

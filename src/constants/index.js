import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    html,
    css,
    reactjs,
    mysql,
    tailwind,
    nodejs,
    mongodb,
    git,
    amazon,
    inno,
    voice,
    face,
    iot,
    threejs,
  } from "../assets";
  
  export const navLinks = [
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
      title: "Python Developer",
      icon: web,
    },
    {
      title: "ML Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "Data Analytics",
      icon: web,
    },
    {
      title: "Web Development",
      icon: mobile,
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "MySQL",
      icon: mysql,
    }
  ];
  
  const experiences = [
    {
      title: "ML Data Associate",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#383E56",
      date: "February 2024 - Present",
      points: [
        "Engaged in Image Analytics, Data Analysis, and Machine Learning initiatives.",
        "Developed and optimized machine learning models for data-driven image recognition tasks.",
        "Worked on data analysis pipelines and deployed solutions using cloud-based machine learning frameworks.",
        "Ensured high-quality data accuracy through thorough testing and debugging of models.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Innodatatics",
      icon: inno,
      iconBg: "#1d165c",
      date: "March 2023 - June 2023",
      points: [
        "Analyzed CNC machine data to minimize unplanned downtime.",
        "Conducted comprehensive Exploratory Data Analysis (EDA) to identify critical insights.",
        "Developed and deployed predictive models to optimize machine performance and reduce downtime by leveraging data understanding and business insights.",
        "Delivered actionable solutions that aligned with business goals and customer requirements.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Innodatatics",
      icon: inno,
      iconBg: "#1d165c",
      date: "July 2024 - September 2024",
      points: [
        "Collaborated with cross-functional teams to understand the business problem and technical constraints.",
        "Led the data collection, preprocessing, and feature engineering to build a robust dataset for training machine learning models.",
        "Developed and deployed AI models, optimizing for accuracy and cost-effectiveness, ensuring a 90% detection rate for hazardous materials.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Voice Assistant",
      description:
        "Developed an AI-based voice assistant using Python. Enabled interaction through voice commands for tasks like opening apps and retrieving information.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "recurrentneuralnetwork",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: voice,
      source_code_link: "https://github.com/",
    },
    {
      name: "Face Recognition",
      description:
        "Developed a Python-based facial recognition system for automated attendance with real-time detection, improving accuracy and efficiency.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "convolutionalneuralnetwork",
          color: "green-text-gradient",
        },
        {
          name: "machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: face,
      source_code_link: "https://github.com/",
    },
    {
      name: "Blind Stick",
      description:
        "Designed an IoT-based smart stick using Arduino Uno and ultrasonic sensors to assist visually impaired individuals.",
      tags: [
        {
          name: "arduinoUNO",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "csharp",
          color: "pink-text-gradient",
        },
      ],
      image: iot,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
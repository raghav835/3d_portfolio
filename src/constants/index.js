import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "3D Modeller",
        company_name: "RAN WIRELESS",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2022",
        points: [
            "Ensure models meet technical specifications and optimize them for real-time rendering.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Design Engineer",
        company_name: "Ebenus",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "April 2021 - Jul 2023",
        points: [
            "Ensure models meet technical specifications and optimize them for real-time rendering.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Security Analyst Trainee",
        company_name: "SOC EXPERTS",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jul 2023 - Nov 2023",
        points: [
            "Assisted in monitoring security alerts and events using SIEM tools.",
            "Conducted analysis of network and system logs to identify potential security incidents.",
            "Collaborated with senior analysts to investigate and respond to security incidents.",
            "Participated in vulnerability assessments and assisted in patch management processes",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/raghav835',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/raghavendra-gh-2a6bb3168/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Frontend 3D Website',
        description: '"Exploring a Three.js 3D website portfolio can be a captivating experience, showcasing the versatility of the library in creating immersive and visually stunning online environments. ',
        link: 'https://raghavendra33portfolio.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Hulu Webpage Clone',
        description: 'Hulu - Stream Your Favorites, Anytime, Anywhere.',
        link: 'https://huluclone33.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'luxeflicks',
        description: 'Movie Card Application.',
        link: 'https://luxeflicks.netlify.app/',
    },

    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'sushimon33',
        description: 'Food Delivery WebApp',
        link: 'https://sushimon33.netlify.app/',
    }
];
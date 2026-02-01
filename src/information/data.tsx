import { logos, thumbnails } from "./statics";

const links = {
    email: "mailto:bill2682004@gmail.com",
    github: "https://github.com/something0412",
    discord: "https://discord.com/users/653856510958370828",
    instagram: "https://www.instagram.com/l.bil__",
    linkedin: "https://linkedin.com/in/phuocvinhle",
};
const skills = {
    languages: [
        {
            icon: logos.java,
            name: "Java",
        },
        {
            icon: logos.python,
            name: "Python",
        },
        {
            icon: logos.javascript,
            name: "JavaScript",
        },
        {
            icon: logos.typescript,
            name: "TypeScript",
        },
        {
            icon: logos.cplus,
            name: "C++",
        },
        {
            icon: logos.csharp,
            name: "C#",
        },
        {
            icon: logos.sql,
            name: "SQL",
        },
        {
            icon: [logos.html, logos.css],
            name: "HTML/CSS",
        },
    ],
    technologies: [
        {
            icon: logos.aws,
            name: "AWS",
        },
        {
            icon: logos.react,
            name: "React",
        },
        {
            icon: logos.nodejs,
            name: "Node.js",
        },
        {
            icon: logos.git,
            name: "Git",
        },
        {
            icon: logos.mongodb,
            name: "MongoDB",
        },
        {
            icon: logos.flask,
            name: "Flask",
        },
        {
            icon: logos.socketio,
            name: "Socket.io",
        },
    ],
};

const projects = [
    {
        name: "Voice - Vault",
        thumbnail: thumbnails.voicevault_tn,
        desc: (
            <p>
                A full-stack <strong>serverless</strong> web application that
                converts text files into audio, featuring a React frontend
                deployed on <strong>AWS S3/CloudFront</strong> for fast content
                delivery, and <strong>AWS Lambda</strong> with{" "}
                <strong>API Gateway</strong> and{" "}
                <strong>pre-signed S3 URLs</strong> for secure uploads and
                downloads
            </p>
        ),
        github: "https://github.com/something0412/voice-vault",
        live_demo: "https://d4qejj20t2b30.cloudfront.net/",
        techs: [
            ["AWS", logos.aws],
            ["React", logos.react],
            ["JavaScript", logos.javascript],
            ["CSS", logos.css],
        ],
    },
    {
        name: "This Portfolio",
        thumbnail: thumbnails.portfolio_tn,
        desc: (
            <p>
                This portfolio was built from scratch using{" "}
                <strong>React</strong> and is deployed with{" "}
                <strong>AWS S3</strong> and <strong>CloudFront</strong>
            </p>
        ),
        github: "https://github.com/something0412/Portfolio_Website",
        live_demo: "",
        techs: [
            ["AWS", logos.aws],
            ["React", logos.react],
            ["TypeScript", logos.typescript],
            ["CSS", logos.css],
        ],
    },
    {
        name: "Live Chat",
        thumbnail: thumbnails.live_chat_tn,
        desc: (
            <p>
                A <strong>real-time</strong> web chat application that allows
                users to create rooms and communicate instantly. Powered by a{" "}
                <strong>React</strong> interface and a{" "}
                <strong>Flask server</strong>, it keeps conversations fast and
                smooth
            </p>
        ),
        github: "https://github.com/something0412/live_chat",
        live_demo: "",
        techs: [
            ["React", logos.react],
            ["TypeScript", logos.typescript],
            ["Python", logos.python],
            ["Flask", logos.flask],
            ["Socket.io", logos.socketio],
            ["MongoDB", logos.mongodb],
        ],
    },
    {
        name: "To-Do Mobile App",
        thumbnail: thumbnails.todo_tn,
        desc: (
            <p>
                Built with <strong>React Native</strong>, this to-do app
                provides a fast, minimal task experience. It uses{" "}
                <strong>AsyncStorage</strong> for reliable local storage and
                helps users stay organized with a simple interface
            </p>
        ),
        github: "https://github.com/something0412/To-do-App",
        live_demo: "",
        techs: [
            ["React", logos.react],
            ["TypeScript", logos.typescript],
            ["Expo", logos.expo],
            ["Tailwind", logos.tailwind],
        ],
    },
];

export { skills, links, projects };

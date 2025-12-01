declare const links: {
    email: string;
    github: string;
    discord: string;
    instagram: string;
    linkedin: string;
};
declare const skills: {
    languages: ({
        icon: string;
        name: string;
    } | {
        icon: string[];
        name: string;
    })[];
    technologies: {
        icon: string;
        name: string;
    }[];
};
declare const projects: {
    name: string;
    thumbnail: string;
    desc: string;
    github: string;
    live_demo: string;
    techs: string[][];
}[];
export { skills, links, projects };

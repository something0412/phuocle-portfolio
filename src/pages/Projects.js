import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ProjectDiv from "../components/Project";
import "../styles/projects.css";
import { projects } from "../information/data";
import Footer from "../components/Footer";
import Breaker from "../components/Breaker";
function Projects() {
    const ProjectsSec = () => {
        return (_jsx("div", { className: "main-projects", children: projects.map((proj, i) => (_jsx(ProjectDiv, { name: proj.name, thumbnail: proj.thumbnail, desc: proj.desc, github: proj.github, live_demo: proj.live_demo, techs: proj.techs }, i))) }));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "page projects-page", children: [_jsx(Breaker, { text: "Projects" }), _jsx(ProjectsSec, {})] }), _jsx(Footer, {})] }));
}
export default Projects;

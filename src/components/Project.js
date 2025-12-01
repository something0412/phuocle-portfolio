import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import arrow from "../assets/icons/angle-right.png";
import play from "../assets/icons/play.png";
function ProjectDiv(props) {
    return (_jsxs("div", { className: "project-div", children: [_jsx("div", { className: "thumbnail", children: _jsx("img", { src: props.thumbnail, alt: "thumbnail" }) }), _jsxs("div", { className: "proj-details", children: [_jsx("p", { className: "proj-name", children: props.name }), _jsx("p", { className: "proj-desc", children: props.desc }), _jsx("div", { className: "proj-techs", children: props.techs.map((tech, i) => (_jsxs("div", { className: "tech", children: [_jsx("img", { src: tech[1], alt: "tech-logo" }), tech[0]] }, i))) })] }), _jsxs("div", { className: "buttons", children: [props.live_demo && (_jsx("a", { href: props.live_demo, target: "blank", children: _jsxs("button", { children: ["Live Demo ", _jsx("img", { src: play, alt: "" })] }) })), _jsx("a", { href: props.github, target: "blank", children: _jsxs("button", { children: ["GitHub ", _jsx("img", { src: arrow, alt: "arrow-icon" })] }) })] })] }));
}
export default ProjectDiv;

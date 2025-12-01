import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import profile_pic from "../assets/images/Profile_Pic_1.jpg";
import "../styles/about.css";
import bc_logo from "../assets/images/bc.jpeg";
import uh_logo from "../assets/images/uh.jpg";
import Breaker from "../components/Breaker";
import Footer from "../components/Footer";
import { skills } from "../information/data";
function About() {
    const arr = [
        {
            img: bc_logo,
            school: "Bellevue College, WA",
            time: "Sep 2022",
            desc: "Enrolled in A.S.",
        },
        {
            img: bc_logo,
            school: "Bellevue College, WA",
            time: "Jun 2024",
            desc: "Graduated with A.S.",
        },
        {
            img: uh_logo,
            school: "University of Houston, TX",
            time: "Aug 2025",
            desc: "Transferred and Began B.S. in Computer Science",
        },
        {
            img: uh_logo,
            school: "University of Houston, TX",
            time: "Jun 2027",
            desc: "Expected Graduation: B.S. in Computer Science",
        },
    ];
    // Opening Section
    const OpenSec = () => {
        return (_jsxs("div", { className: "open-section", children: [_jsx("div", { className: "profile-pic-container", children: _jsx("img", { src: profile_pic, alt: "profile-img" }) }), _jsxs("p", { className: "open-desc", children: ["Hi, my name is Phuoc, but I go by", " ", _jsx("span", { className: "highlighted", children: "Bill" }), ". I'm a", " ", _jsx("span", { className: "highlighted", children: "Computer Science student" }), " ", "at UH who enjoys creating simple and", " ", _jsx("span", { className: "highlighted", children: "meaningful software" }), ". I'm ", _jsx("span", { className: "highlighted", children: "passionate" }), " about writing ", _jsx("span", { className: "highlighted", children: "clean code" }), ", building", " ", _jsx("span", { className: "highlighted", children: "efficient applications" }), ", and continually", " ", _jsx("span", { className: "highlighted", children: "learning new technologies" }), " ", "to grow as a", " ", _jsx("span", { className: "highlighted", children: "Software Engineer" }), "."] })] }));
    };
    // Education Section
    const Event = (props) => {
        return (_jsxs("div", { className: "timeline-event", children: [_jsx("div", { className: "event-img", children: _jsx("img", { src: props.img, alt: "event-img", style: props.img == bc_logo
                            ? { borderColor: "rgba(18, 89, 160, 0.3)" }
                            : { borderColor: "rgba(212, 42, 70, 0.3)" } }) }), _jsx("p", { className: "school-name", children: props.school }), _jsxs("div", { className: "event-mark", children: [_jsx("div", { className: "time-line" }), _jsx("div", { className: "time-mark" }), _jsx("div", { className: "time-line" })] }), _jsx("p", { className: "event-time", children: props.time }), _jsx("p", { className: "event-desc", children: props.desc })] }));
    };
    const school_exp = {
        bc: {
            logo: bc_logo,
            bg_color: "rgba(191, 217, 243, 0.3)",
            period: "2022 - 2025",
            skills: [],
            exp: [
                _jsxs(_Fragment, { children: ["Worked as a", " ", _jsx("span", { className: "keywords", children: "Student Engagement Front Desk Assistant" }), ", assisting ", _jsx("span", { className: "keywords", children: "30+ students" }), " ", "daily and ", _jsx("span", { className: "keywords", children: "managing" }), " the", " ", _jsx("span", { className: "keywords", children: "student ID database" })] }),
                _jsxs(_Fragment, { children: [_jsx("span", { className: "keywords", children: "Led financial operations" }), " ", "for a 50+ member tech club,", " ", _jsx("span", { className: "keywords", children: "developing a budget management system" }), ", securing funding for more than", " ", _jsx("span", { className: "keywords", children: "3 major events" }), ", and ensuring fiscal responsibility"] }),
            ],
        },
    };
    const SchoolExp = (props) => {
        return (_jsxs("div", { className: "school-exp-container", children: [_jsxs("div", { className: "school-logo-area", children: [_jsx("div", { className: "school-logo", children: _jsx("img", { src: props.logo, alt: "school-logo" }) }), _jsx("p", { className: "school-period", children: props.period })] }), _jsx("div", { className: "exps", style: { flex: 1, backgroundColor: `${props.bg_color}` }, children: props.exp_list.map((exp, i) => (_jsx("li", { className: "exp-text", children: exp }, i))) })] }));
    };
    const EduSec = () => {
        return (_jsxs("div", { className: "edu-section", children: [_jsx("div", { className: "edu-timeline", children: arr.map((event, i) => (_jsx(Event, { img: event.img, school: event.school, time: event.time, desc: event.desc }, i))) }), _jsx(SchoolExp, { logo: school_exp.bc.logo, period: school_exp.bc.period, exp_list: school_exp.bc.exp, bg_color: school_exp.bc.bg_color })] }));
    };
    // Skills Section
    const Skill = (props) => {
        const imgSrc = Array.isArray(props.icon) ? props.icon[0] : props.icon;
        return (_jsxs("div", { className: "skill-block", children: [props.name === "HTML/CSS" && Array.isArray(props.icon) ? (_jsxs("div", { className: "diagonal-container", children: [_jsx("img", { src: props.icon[0], className: "icon icon-left" }), _jsx("img", { src: props.icon[1], className: "icon icon-right" })] })) : (_jsx("img", { src: imgSrc, alt: "skill-icon" })), _jsx("p", { className: "skill-name", children: props.name })] }));
    };
    const SkillsSec = () => {
        return (_jsxs("div", { className: "skills-section", children: [skills.languages.map((language, i) => (_jsx(Skill, { icon: language.icon, name: language.name }, i))), skills.technologies.map((tech, i) => (_jsx(Skill, { icon: tech.icon, name: tech.name }, i)))] }));
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "page about-page", children: [_jsx(OpenSec, {}), _jsx(Breaker, { text: "Education" }), _jsx(EduSec, {}), _jsx(Breaker, { text: "Skills" }), _jsx(SkillsSec, {})] }), _jsx(Footer, {})] }));
}
export default About;

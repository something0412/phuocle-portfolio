import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../styles/home.css";
import animated_img from "../assets/images/final.png";
import animated_gif from "../assets/images/animatedGIF.gif";
import profile_img from "../assets/images/Profile_Pic_1.jpg";
import marker from "../assets/icons/marker.png";
import { skills, links, projects } from "../information/data";
import resume from "../assets/resume.pdf";
import { icons } from "../information/statics";
import Breaker from "../components/Breaker";
import Footer from "../components/Footer";
function Home() {
    function IntroText() {
        const fullText = [
            "Computer Science Student",
            "Aspiring Software Engineer",
        ];
        const [displayedText1, setDisplayedText1] = useState("");
        const [displayedText2, setDisplayedText2] = useState("");
        useEffect(() => {
            let index1 = 0;
            let index2 = 0;
            const typeFirst = () => {
                if (index1 < fullText[0].length) {
                    setDisplayedText1(fullText[0].slice(0, index1 + 1));
                    index1++;
                    setTimeout(typeFirst, 30);
                }
                else {
                    setTimeout(typeSecond, 30);
                }
            };
            const typeSecond = () => {
                if (index2 < fullText[1].length) {
                    setDisplayedText2(fullText[1].slice(0, index2 + 1));
                    index2++;
                    setTimeout(typeSecond, 30);
                }
            };
            typeFirst();
        }, []);
        return (_jsxs("p", { className: "intro-text", children: [_jsx("span", { children: "Phuoc" }), " ", _jsx("span", { className: "pronounce", children: "(foo-uke)" }), " ", displayedText1, displayedText2 && (_jsxs(_Fragment, { children: [_jsx("span", { className: "separator", children: " & " }), displayedText2] }))] }));
    }
    // Intro Section
    const IntroSec = () => {
        const [img, setImg] = useState(animated_img);
        return (_jsxs("div", { className: "intro-section", children: [_jsxs("div", { className: "intro-container", children: [_jsx(IntroText, {}), _jsxs("div", { className: "intro-links", children: [_jsx("a", { className: "intro-icon", href: resume, download: true, children: _jsxs("button", { className: "resume-btn", children: [_jsx("img", { src: icons.resume, alt: "resume-icon" }), "Resume"] }) }), _jsx("a", { className: "intro-icon", href: links.linkedin, target: "blank", children: _jsx("img", { src: icons.linkedin, alt: "linkedin-icon" }) }), _jsx("a", { className: "intro-icon", href: links.github, target: "blank", children: _jsx("img", { src: icons.github, alt: "github-icon" }) }), _jsx("a", { className: "intro-icon", href: links.email, target: "blank", children: _jsx("img", { src: icons.email, alt: "email-icon" }) })] })] }), _jsxs("div", { className: "intro-img-container", children: [_jsx("img", { src: img, onMouseEnter: () => {
                                setImg(animated_gif);
                            }, onMouseLeave: () => {
                                setImg(animated_img);
                            } }), _jsx("p", { className: "current-status", children: "Looking for internships" })] })] }));
    };
    // About-me Section
    const AboutSec = () => {
        return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "about-section", children: [_jsx("div", { className: "profile-img-container", children: _jsx("img", { src: profile_img, alt: "profile-img" }) }), _jsxs("div", { className: "about-container", children: [_jsxs("p", { className: "name", children: ["Phuoc Vinh Le", _jsx("img", { src: icons.check_mark, alt: "check-mark" })] }), _jsxs("div", { className: "about-details", children: [_jsxs("div", { className: "detail", children: [_jsx("p", { className: "focus", children: "3" }), _jsx("p", { children: "Projects" })] }), _jsxs("div", { className: "detail", children: [_jsx("p", { className: "focus", children: "3.2" }), _jsx("p", { children: "GPA" })] }), _jsxs("div", { className: "detail", children: [_jsx("p", { className: "focus", children: "Jun 2027" }), _jsx("p", { children: "Expected Graduation" })] })] }), _jsxs("p", { className: "school", children: [_jsx("img", { src: marker, alt: "location-marker" }), "Houston, TX"] })] })] }), _jsxs("div", { className: "about-skills", children: [_jsxs("div", { className: "languages", children: [_jsx("p", { children: "Languages: " }), skills.languages.map((language, i) => (_jsx("div", { className: "skill-container", children: language.name }, i)))] }), _jsxs("div", { className: "technologies", children: [_jsx("p", { children: "Technologies: " }), skills.technologies.map((tech, i) => (_jsx("div", { className: "skill-container", children: tech.name }, i)))] })] })] }));
    };
    // Projects Section
    const ProjectImg = (props) => {
        return (_jsx("div", { className: "project-img-container", children: _jsx("a", { href: props.url, target: "blank", children: _jsx("img", { src: props.img, alt: "project-gif" }) }) }));
    };
    const ProjectDesc = (props) => {
        return (_jsxs("div", { className: "description-container", children: [_jsx("p", { style: props.index % 2 != 0
                        ? { textAlign: "right", marginBottom: "2vh" }
                        : { marginBottom: "2vh" }, children: _jsx("b", { children: props.name }) }), _jsx("p", { className: "description", style: { textAlign: "justify" }, children: props.desc })] }));
    };
    const ProjectsSec = () => {
        return (_jsx("div", { className: "projects-section", children: projects.map((project, index) => {
                if (index < 2) {
                    return (_jsx("div", { className: "project-container", style: index % 2 == 0
                            ? { justifyContent: "start" }
                            : { justifyContent: "end" }, children: index % 2 == 0 ? (_jsxs(_Fragment, { children: [_jsx(ProjectImg, { img: project.thumbnail, url: project.live_demo
                                        ? project.live_demo
                                        : project.github }), _jsx(ProjectDesc, { name: project.name, desc: project.desc, index: index })] })) : (_jsxs(_Fragment, { children: [_jsx(ProjectDesc, { name: project.name, desc: project.desc, index: index }), _jsx(ProjectImg, { img: project.thumbnail, url: project.live_demo
                                        ? project.live_demo
                                        : project.github })] })) }, index));
                }
            }) }));
    };
    // Display
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "page home-page", children: [_jsx(IntroSec, {}), _jsx(Breaker, { text: "About-me" }), _jsx(AboutSec, {}), _jsx(Breaker, { text: "Recent Projects" }), _jsx(ProjectsSec, {})] }), _jsx(Footer, {})] }));
}
export default Home;

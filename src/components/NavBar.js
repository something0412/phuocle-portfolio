import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
function NavBar() {
    return (_jsxs("div", { className: "navbar", children: [_jsx("div", { className: "logo-container", children: _jsx("img", { src: logo, alt: "logo" }) }), _jsxs("ul", { children: [_jsx(NavLink, { to: "/", children: _jsx("li", { children: "Home" }) }), _jsx(NavLink, { to: "/projects", children: _jsx("li", { children: "Projects" }) }), _jsx(NavLink, { to: "/about", children: _jsx("li", { children: "About-me" }) }), _jsx(NavLink, { to: "/contact", children: _jsx("li", { children: "Contact" }) })] })] }));
}
export default NavBar;

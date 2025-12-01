import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../styles/footer.css";
import { icons } from "../information/statics";
import { links } from "../information/data";
function Footer() {
    const medias = [
        {
            icon: icons.github,
            url: links.github,
        },
        {
            icon: icons.discord,
            url: links.discord,
        },
        {
            icon: icons.instagram,
            url: links.instagram,
        },
        {
            icon: icons.linkedin,
            url: links.linkedin,
        },
    ];
    return (_jsxs("div", { className: "footer-area", children: [_jsxs("div", { className: "email-div", children: [_jsx("p", { className: "text", children: "I'd love to connect and collaborate" }), _jsx("a", { href: "mailto:bill2682004@gmail.com", children: _jsx("p", { className: "email", children: "bill2682004@gmail.com" }) })] }), _jsxs("div", { className: "media-div", children: [_jsx("p", { className: "text", children: "Media" }), _jsx("div", { className: "media-icons", children: medias.map((media, i) => (_jsx("div", { className: "media-icon-container", children: _jsx("a", { href: media.url, target: "blank", children: _jsx("img", { className: "media-icon", src: media.icon, alt: "media-icon" }) }) }, i))) })] }), _jsxs("p", { className: "copyright", children: [_jsx("img", { className: "copyright-icon", src: icons.copyright, alt: "copyright-icon" }), " ", "Phuoc Vinh Le 2025"] })] }));
}
export default Footer;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// used style from App.css
function Breaker(props) {
    return (_jsxs("div", { className: "breaker", children: [_jsx("p", { className: "hashtag", children: "#" }), _jsx("p", { className: "breaker-text", children: props.text }), _jsx("div", { className: "breaker-line" })] }));
}
export default Breaker;

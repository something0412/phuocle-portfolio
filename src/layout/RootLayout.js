import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function RootLayout() {
    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };
    return (_jsxs("div", { children: [_jsx(ScrollToTop, {}), _jsx(NavBar, {}), _jsx("div", { className: "pages-container", children: _jsx(Outlet, {}) })] }));
}
export default RootLayout;

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import Projects from "./pages/Projects";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
function App() {
    const router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: "/", element: _jsx(RootLayout, {}), children: [_jsx(Route, { index: true, element: _jsx(_Fragment, { children: _jsx(Home, {}) }) }), _jsx(Route, { path: "projects", element: _jsx(Projects, {}) }), _jsx(Route, { path: "about", element: _jsx(About, {}) }), _jsx(Route, { path: "contact", element: _jsx(Contact, {}) })] })));
    return (_jsx("div", { className: "pages-container", children: _jsx(RouterProvider, { router: router }) }));
}
export default App;

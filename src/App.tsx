import "./App.css";
import Projects from "./pages/Projects";
import {
    // createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    // const router = createHashRouter(
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route
                    index
                    element={
                        <>
                            <Home />
                        </>
                    }
                />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return (
        <div className="pages-container">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;

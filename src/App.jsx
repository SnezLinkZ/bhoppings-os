import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";

export default function App() {
    const [page, setPage] = useState("home");

    let CurrentPage;
    if (page === "home") CurrentPage = Home;
    else if (page === "about") CurrentPage = About;
    else CurrentPage = Projects;

    return (
        <>
            <Navbar navigate={setPage} />
            <main>
                <CurrentPage />
            </main>
        </>
    );
}
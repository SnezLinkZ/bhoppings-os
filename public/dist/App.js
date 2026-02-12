import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
function App() {
  const [page, setPage] = useState("home");
  let CurrentPage;
  if (page === "home") CurrentPage = Home;
  else if (page === "about") CurrentPage = About;
  else CurrentPage = Projects;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Navbar, { navigate: setPage }),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(CurrentPage, {}) })
  ] });
}
export {
  App as default
};
//# sourceMappingURL=App.js.map

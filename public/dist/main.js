var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { jsx } from "react/jsx-runtime";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../style.css";
var require_main = __commonJS({
  "src/main.jsx"() {
    createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsx(App, {}));
  }
});
export default require_main();
//# sourceMappingURL=main.js.map

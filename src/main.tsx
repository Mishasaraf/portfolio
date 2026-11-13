import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Self-hosted fonts (no Google Fonts request needed).
import "@fontsource/alegreya/latin-400.css";
import "@fontsource/alegreya/latin-400-italic.css";
import "@fontsource/alegreya/latin-500.css";
import "@fontsource/alegreya/latin-700.css";
import "@fontsource/alegreya-sans/latin-400.css";
import "@fontsource/alegreya-sans/latin-500.css";
import "@fontsource/alegreya-sans/latin-700.css";
import "@fontsource/alegreya-sans-sc/latin-500.css";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

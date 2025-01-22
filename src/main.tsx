import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/css/index.css";
import Welcome from "@/pages/welcome.tsx";
import Projects from "@/pages/projects";
import Skills from "./pages/skills";
import PrepositionValue from "./pages/preposition-value";
import Contact from "./pages/contact";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
            <Welcome />
            <Skills />
            <PrepositionValue />
            <Projects />
            <Contact />
        </ThemeProvider>
	</StrictMode>
);

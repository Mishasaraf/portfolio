import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Letters from "./components/Letters";
import ModelUN from "./components/ModelUN";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Research from "./components/Research";
import { profile } from "./data/profile";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Experience />
        <ModelUN />
        <Achievements />
        <Letters />
        <Contact />
      </main>
      <footer className="container footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

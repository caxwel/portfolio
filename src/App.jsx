import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Highlights from "./components/highlights/Highlights";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Skybox from "./components/skybox/Skybox";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Highlights />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;

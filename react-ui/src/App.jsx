import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Highlights from "./components/highlights/Highlights";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import LoadingScreen from "./components/loading/LoadingScreen";
import { useState, useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return (
    <>
      {loading === false ? (
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;

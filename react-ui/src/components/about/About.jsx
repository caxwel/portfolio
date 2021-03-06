import "./about.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="card">
          <div className="left">
            <img src="assets/maxasset.png" alt="" />
          </div>
          <div className="right">
            <h1>About Me</h1>
            <div className="top">
              <a href="https://github.com/caxwel">
                <GitHub className="start" />
              </a>
              <a href="assets/MTCV.pdf" download>
                <div className="cv">
                  <span>CV</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/maxturer">
                <LinkedIn className="end" />
              </a>
            </div>
            <div className="center">
              <span>
                Hello! I’m a software engineer and artist newly based in DC, just having come home from living
                in my fourth country and most likely drawing in my fiftieth
                sketchbook.
              </span>
              <span>
                Check out my tech talk on making art out of pure CSS{" "}
                <a href="https://www.youtube.com/watch?v=jbHVNn4qoPI">here</a>!
              </span>
              <span>
                I’m always looking forward to seeing what my next project will
                be as a software engineer and can’t wait to discover my next
                step.{" "}
              </span>
            </div>
            <div className="bottom">
              <h3>Thanks for visiting!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

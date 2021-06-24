import "./about.scss";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="card">
                    <div className="left">
                        <img src="#" alt=""/>
                    </div>
                    <div className="right">
                    <h1>About Me</h1>
                    <div className="top">
                        <GitHub className="start" />
                        <LinkedIn className="end" />
                    </div>
                    <div className="center">
                        about u 
                    </div>
                    <div className="bottom">
                        <h3>Thanks for visiting!</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
import "./topbar.scss";
import { GitHub, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">alyssa</a>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span>github.com/mochiblush</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>alyssamc17@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line1"></span>
                        <span className="line1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
};
import "./topbar.scss";
import { GitHub, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">max</a>
                    <div className="itemContainer">
                        <GitHub className="icon" />
                        <span>github.com/caxwel</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>turermax@gmail.com</span>
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
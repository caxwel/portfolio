import "./topbar.scss";
import { GitHub, Mail, ArrowDownward } from "@material-ui/icons";

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
                <div class="pdfImg"><img src="assets/pdflink.png" alt="CV download" /><div class="overlayPdf"><a href="/assets/assets/pdflink.png" download><ArrowDownward /></a></div></div>
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
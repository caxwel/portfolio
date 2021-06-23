import "./contact.scss";
import { Send } from "@material-ui/icons";
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="imgContainer">
                <img src="assets/McWilliams08.jpg" alt=""/>
                    </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span id="thanks">Thanks, I'll get back to you ASAP!</span>}
                </form>
            </div>
        </div>
    )
};
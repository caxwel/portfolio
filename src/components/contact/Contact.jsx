import "./contact.scss";
// import { Send } from "@material-ui/icons";
import { useState } from "react";

export default function Contact() {

    const [message, setMessage] = useState(false);
    const [status, setStatus] = useState("Send");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Send");
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="imgContainer">
                </div>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" id="name" required />
                    <input type="text" placeholder="Email" id="email" required />
                    <textarea placeholder="Message" id="message" required></textarea>
                    <button type="submit">{status}</button>
                    {message && <span id="thanks">Thanks, I'll get back to you ASAP!</span>}
                </form>
            </div>
        </div>
    )
};
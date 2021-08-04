import "./intro.scss";
import Skybox from "../skybox/Skybox";
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 2000,
            backSpeed: 70,
            showCursor: true,
            strings: ["Web Developer", "Software Engineer"],
        })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <Skybox />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! It's me,</h2>
                    <h1>Max Turer,</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#highlights" className="logo">
                    <ArrowDownward />
                </a>
            </div>
        </div>
    )
};
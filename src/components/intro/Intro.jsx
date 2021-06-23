import "./intro.scss";
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
            strings: ["Graphic Designer"],
        })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! It's me,</h2>
                    <h1>Alyssa McWilliams,</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio" className="logo">
                    <ArrowDownward />
                </a>
            </div>
        </div>
    )
};
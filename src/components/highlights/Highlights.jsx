import "./highlights.scss";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { descriptions } from "../../data";
import { useState } from "react";

export default function Highlights() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : descriptions.length - 1) : setCurrentSlide(currentSlide < descriptions.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="highlights" id="highlights">
            <div className="slider" style = {{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                {descriptions.map((d) => (
                    <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt=""/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <ArrowBack className="back" onClick={() => handleClick("left")} />
            <ArrowForward className="forward" onClick={() => handleClick("right")} />
        </div>
    )
};
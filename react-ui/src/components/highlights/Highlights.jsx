import "./highlights.scss";
import { ArrowBack, ArrowDownward, ArrowForward } from "@material-ui/icons";
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
                                    <img src={d.icon} alt={d.title} />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    <span>{d.desc}</span> <span id="desc2">{d.desc2}</span>
                                </p>
                                <a className="more" href="/#portfolio"><span>Learn More Below</span><ArrowDownward className="arrow"/></a>
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
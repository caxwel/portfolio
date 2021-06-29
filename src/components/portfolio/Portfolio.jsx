import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import { Portfolio1, Portfolio2, Portfolio3 } from "../../data";
import Lightbox from "../lightbox/Lightbox";


export default function Portfolio() {
    const [selected, setSelected] = useState("cat1");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "cat1",
            title: "Contributions"
        },
        {
            id: "cat2",
            title: "Web"
        },
        {
            id: "cat3",
            title: "Mobile"
        }
    ];

    useEffect(() => {

        switch(selected) {
            case "cat1":
                setData(Portfolio1);
                break;
            case "cat2":
                setData(Portfolio2);
                break;
            case "cat3":
                setData(Portfolio3);
                break;
            default:
                setData(Portfolio1);
        }

    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1><br />
            <Lightbox />
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title = {item.title} 
                    active = {selected === item.id} 
                    setSelected = {setSelected} 
                    id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className={ `item ${d.group}` } >
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                        {/* <Modal open={open} onClose={handleClose} >HI</Modal> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
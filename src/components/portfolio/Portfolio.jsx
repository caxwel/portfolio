import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import { featuredPortfolio, Portfolio1, Portfolio2, Portfolio3 } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
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
            case "featured":
                setData(featuredPortfolio);
                break;
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
                setData(featuredPortfolio);
        }

    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
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
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};
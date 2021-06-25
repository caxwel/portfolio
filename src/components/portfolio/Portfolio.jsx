import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState } from "react";
import { Portfolio1, Portfolio2, Portfolio3 } from "../../data";
import Modal from '@material-ui/core/Modal';


export default function Portfolio() {
    const [selected, setSelected] = useState("cat1");
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

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
                    <div className={ `item ${d.group}` } onClick={ handleOpen }>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                        {/* <Modal open={open} onClose={handleClose} >HI</Modal> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
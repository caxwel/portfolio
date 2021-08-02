import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState, useRef } from "react";
import { featuredPortfolio, Portfolio1, Portfolio2, Portfolio3 } from "../../data";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '&:focus': {
            border: 'none',
        },
        '&:focus-visible': {
            outline: 'none',
            
        }
    },
  }));



export default function Portfolio(active) {
    const [selected, setSelected] = useState("cat1");
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [desc, setDesc] = useState([]);
    const classes = useStyles();

    const titleRef = useRef("hello");
    const descRef = useRef("hello");
    const techRef = useRef("helllllo");

    const handleOpen = (x) => {
        setOpen(true);
        let boxId = x - 1;
        titleRef.current = data[boxId].title;
        descRef.current = data[boxId].desc;
        techRef.current = data[boxId].tech;
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const list = [
        {
            id: "cat1",
            title: "Featured"
        },
        {
            id: "cat2",
            title: "Contributions"
        },
        {
            id: "cat3",
            title: "Web"
        },
        {
            id: "cat4",
            title: "Other"
        }
    ];

    useEffect(() => {

        switch(selected) {
            case "cat1":
                setData(featuredPortfolio);
                break;
            case "cat2":
                setData(Portfolio1);
                break;
            case "cat3":
                setData(Portfolio2);
                break;
            default:
                setData(Portfolio3);
        }

    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1><br />
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
                    <div className={`item ${d.group} ${d.id}` } >
                        <img src={d.img} alt="" onClick={() => handleOpen(d.id)} />
                        <h3 onClick={() => handleOpen(d.id)}>{d.title}</h3>
                    </div>
                ))}
                    <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                <div className={classes.paper}>
                                    <div className={`paper-content`}>
                                        <h2 id="simple-modal-title" ref={titleRef}>
                                        {titleRef.current}
                                        </h2>
                                        <p id="simple-modal-description" ref={descRef}>
                                        {descRef.current}
                                        </p>
                                        <p id="simple-modal-description" ref={techRef}>
                                        {techRef.current}
                                        </p>
                                    </div>
                                </div>
                    </Modal>
            </div>
        </div>
    );
};
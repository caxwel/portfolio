import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { useEffect, useState, useRef } from "react";
import { Portfolio1, Portfolio2, Portfolio3 } from "../../data";
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
    const reference = useRef("hello");

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
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
                        <img src={d.img} alt="" onClick={handleOpen} />
                        <h3 onClick={handleOpen}>{d.title}</h3>
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
                                        <h2 id="simple-modal-title">{}</h2>
                                        <p id="simple-modal-description">
                                        {reference.current}
                                        </p>
                                    </div>
                                </div>
                    </Modal>
            </div>
        </div>
    );
};
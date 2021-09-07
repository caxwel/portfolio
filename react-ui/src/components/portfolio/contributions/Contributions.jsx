import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useRef } from "react";
import { Portfolio1 } from "../../../data";
import { Cancel, ArrowBack } from "@material-ui/icons";
import "../featured.scss";

export default function Featured() {
  const [open, setOpen] = useState(false);

  const titleRef = useRef("hello");
  const descRef = useRef("hello");
  const techRef = useRef("helllllo");
  const imgRef = useRef("image");
  const linkRef = useRef("#");

  const handleOpen = (x) => {
    setOpen(true);
    let boxId = x - 1;
    titleRef.current = Portfolio1[boxId].title;
    descRef.current = Portfolio1[boxId].desc;
    techRef.current = Portfolio1[boxId].tech;
    imgRef.current = Portfolio1[boxId].img;
    linkRef.current = Portfolio1[boxId].link;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "700",
      height: 450,
      backgroundColor: "transparent",
      borderWidth: 70,
      borderImageSource: "url(../../fonts/frameborder1.png)",
      borderImageSlice: 180,
      borderImageRepeat: "stretch",
      borderRadius: 10,
      boxShadow: "none",
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      "&:focus": {
        border: "none",
      },
      "&:focus-visible": {
        outline: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="portfolioContainer">
      {Portfolio1.map((d) => (
        <div className={`item ${d.group} ${d.id}`}>
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
          <div className="lightboxWrapper">
            <div className={`paper-content`}>
              <div className="upper">
                <h2 id="simple-modal-title" ref={titleRef}>
                  {titleRef.current}
                </h2>
                <Cancel id="closeOut" onClick={handleClose} />
              </div>
              <div className="middle">
                <div className="text">
                  <p id="simple-modal-description" ref={descRef}>
                    {descRef.current}
                  </p>
                  <p
                    id="simple-modal-description"
                    ref={linkRef}
                    className="see"
                  >
                    <a href={linkRef.current}>
                      See for yourself! <ArrowBack />{" "}
                    </a>
                  </p>
                  <p id="simple-modal-description" ref={techRef}>
                    <b id="bb">Tech:</b> {techRef.current}
                  </p>
                </div>
                <div className="notText">
                  <div className="imgCont">
                    <img src={imgRef.current} alt={titleRef.current} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

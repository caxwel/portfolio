import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import Featured from "./featured/Featured";
import Contributions from "./contributions/Contributions";
import Web from "./web/Web";
import { useEffect, useState, lazy } from "react";
import Skybox from "../skybox/Skybox";

export default function Portfolio(active) {
  const [selected, setSelected] = useState("cat1");

  const list = [
    {
      id: "cat1",
      title: "Featured",
    },
    {
      id: "cat2",
      title: "Web",
    },
    {
      id: "cat3",
      title: "Solo",
    },
  ];

  const displayComponent = (selected) => {
    let dataComponent;
    switch (selected) {
      case "cat1":
        dataComponent = <Featured />;
        break;
      case "cat2":
        dataComponent = <Contributions />;
        break;
      default:
        dataComponent = <Web />;
        break;
    }
    return dataComponent;
  };

  return (
    <div className="portfolio" id="portfolio">
      <div className="bg">
        <Skybox />
      </div>
      <div className="prtContainer">
        <div className="listContainer">
          <h1>Portfolio</h1>
          <br />
          <ul>
            {list.map((item) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        </div>
        {displayComponent(selected)}
      </div>
    </div>
  );
}

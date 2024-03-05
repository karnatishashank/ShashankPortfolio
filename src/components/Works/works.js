import React from "react";
import "./works.css";
import Button from 'react-bootstrap/Button';
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-4.png";
import portfolio4 from "../../assets/portfolio-6.png";
import MyVerticallyCenteredModal from "../Modal/modal";

const Works = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <section id="works">
        <h2 className="worksTitle">Portfolio</h2>
        <span className="worksDesc">
          Passionate and detail-oriented Web developer dedicated to crafting
          seamless, visually appealing, and intuitive digital experiences.
        </span>
        <div className="workTiles">
        <div class="row">
          <div class="column">
            <div class="card">
              <img className="worksImg" src={portfolio1} alt="GHI"/>
              
            </div>
          </div>

          <div class="column">
            <div class="card">
            <img className="worksImg" src={portfolio2} alt="GHI"/>  
            </div>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <div class="card">
            <img className="worksImg" src={portfolio3} alt="GHI"/>  
            </div>
          </div>

          <div class="column">
            <div class="card">
            <img className="worksImg" src={portfolio4} alt="GHI"/>  
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Works;

import React from "react";
import "./works.css";
import Button from "react-bootstrap/Button";
import portfolio1 from "../../assets/portfolio-1.png";
import portfolio2 from "../../assets/portfolio-2.png";
import portfolio3 from "../../assets/portfolio-4.png";
import portfolio4 from "../../assets/portfolio-6.png";
import MyVerticallyCenteredModal from "../Modal/modal";
import { Element } from "react-scroll";

const Works = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Element name="works" className="element">
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
                  {/* <img className="worksImg" src={portfolio1} alt="GHI" /> */}
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <h2>Global Health Impact</h2>
                        <p>
                          <b>Role: </b>Front End Developer
                        </p>
                      </div>
                      <div class="flip-card-back">
                        <ul>
                          <li>
                            Implemented website front-end using React,
                            incorporating Redux for state management and React
                            Router for routing.
                          </li>
                          <li>
                            Utilized hooks for improved component structure and
                            state management.
                          </li>
                          <li>
                            Developed a responsive UI for seamless experience
                            across devices.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  {/* <img className="worksImg" src={portfolio2} alt="GHI" /> */}
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <h2>Ministry of Corporate Affairs</h2>
                        <p>
                          <b>Role: </b>AEM Developer
                        </p>
                      </div>
                      <div class="flip-card-back">
                        <ul>
                          <li>
                          Created custom AEM components to meet project requirements.
                          </li>
                          <li>
                          Customized the DAM system in AEM for efficient storage and retrieval of digital assets.
                          </li>
                          <li>
                          Utilized AEM architecture (Sling, CRX, OSGI, JCR) in development.
                          </li>
                          <li>
                          Designed and engineered AEM components, templates, dialogs, and workflows
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="column">
                <div class="card">
                  {/* <img className="worksImg" src={portfolio3} alt="GHI" /> */}
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <h2>Shashank's Recipe</h2>
                        <p>
                          <b>Role: </b>Front End Developer
                        </p>
                      </div>
                      <div class="flip-card-back">
                        <ul>
                          <li>
                          Proficient in structuring components for Homepage, Recipe, and Food Order sections.
                          </li>
                          <li>
                          Integrated data fetching capabilities to retrieve data from APIs.
                          </li>
                          <li>
                          Utilized React's state and context API for efficient cart management.
                          </li>
                          <li>
                          Adopted CSS Modules for component-based styling, ensuring clean and maintainable styles.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  {/* <img className="worksImg" src={portfolio4} alt="GHI" /> */}
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <h2>Newsportal</h2>
                        <p>
                          <b>Role: </b>AEM Developer
                        </p>
                      </div>
                      <div class="flip-card-back">
                        <ul>
                          <li>
                          Devised OSGi service for Trending Articles using Sling models and HTL for dynamic rendering.
                          </li>
                          <li>
                          Enhanced RTE capabilities for Text Components by configuring and customizing AEM Rich Text Editor.
                          </li>
                          <li>
                          Incorporated CSS and JS into client libraries for optimized AEM application performance and styling.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Works;

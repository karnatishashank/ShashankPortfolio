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
                          <br></br>
                          <li>
                            Utilized hooks for improved component structure and
                            state management.
                          </li>
                          <br></br>
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
                            Created custom AEM components to meet project
                            requirements.
                          </li>
                          <br></br>
                          <li>
                            Customized the DAM system in AEM for efficient
                            storage and retrieval of digital assets.
                          </li>
                          <br></br>
                          <li>
                            Utilized AEM architecture (Sling, CRX, OSGI, JCR) in
                            development.
                          </li>
                          <br></br>
                          <li>
                            Designed and engineered AEM components, templates,
                            dialogs, and workflows
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
                            Proficient in structuring components for Homepage,
                            Recipe, and Food Order sections.
                          </li>
                          <br></br>
                          <li>
                            Utilized React's state and context API for efficient
                            cart management.
                          </li>
                          <br></br>
                          <li>
                            Adopted CSS Modules for component-based styling,
                            ensuring clean and maintainable styles.
                          </li>
                        </ul>
                        <div className="workBtns">
                          <a
                            href="https://github.com/karnatishashank/shashankRecipe.git"
                            className="skillCatLinks"
                          >
                            <span className="skillCatTypes">
                              <span className="skillCatTitle">Code</span>
                            </span>
                          </a>
                          <a
                            href="https://shashankrecipes.web.app/"
                            className="skillCatLinks"
                          >
                            <span className="skillCatTypes">
                              <span className="skillCatTitle">Demo</span>
                            </span>
                          </a>
                        </div>
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
                        <h2>Newsportal News 247</h2>
                        <p>
                          <b>Role: </b>AEM Developer
                        </p>
                      </div>
                      <div class="flip-card-back">
                        <ul>
                          <li>
                            Devised OSGi service for Trending Articles using
                            Sling models and HTL for dynamic rendering.
                          </li>
                          <br></br>
                          <li>
                            Enhanced RTE capabilities for Text Components by
                            configuring and customizing AEM Rich Text Editor.
                          </li>
                          <br></br>
                          <li>
                            Incorporated CSS and JS into client libraries for
                            optimized AEM application performance and styling.
                          </li>
                        </ul>
                        <div className="workBtns">
                          <a
                            href=""
                            className="skillCatLinks"
                          >
                            <span className="skillCatTypes">
                              <span className="skillCatTitle">Code</span>
                            </span>
                          </a>
                          <a
                            href=""
                            className="skillCatLinks"
                          >
                            <span className="skillCatTypes">
                              <span className="skillCatTitle">Demo</span>
                            </span>
                          </a>
                         
                        </div>
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

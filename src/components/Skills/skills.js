import React from "react";
import "../Skills/skills.css";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element name="about" className="element">
    <div>
      <section id="skills">
        <span className="skillTitle">About Me</span>
        <span className="skillDesc">
          My passion lies in front-end development and
          user interface design, where I have honed my skills in React.js,
          JavaScript, HTML, CSS, and Adobe Experience Manager (AEM).
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <div className="skillBarImg">
              <i class="fa-solid fa-user-graduate"></i>
            </div>

            <div className="skillBarText">
              <span className="skillType">Education</span>
              <div className="educationDetails">
                
                <h4>State University of NewYork at Binghamton</h4>
                
                  <p>Master of Science in Computer Science</p>
                  <p>Cumulative GPA <span className="gpa">3.53</span></p>
                  
               
              </div>
              <br/>
              <div className="educationDetails">
                
                <h4>KL University</h4>
                
                  <p>Bachelor of Technology in Computer Science</p>
                  <p>Cumulative GPA <span className="gpa">3.40</span></p>
                  
               
              </div>
            </div>
          </div>
          <div className="skillBar">
            <div className="skillBarImg">
              <i class="fa-solid fa-brain"></i>
            </div>

            <div className="skillBarText">
              <span className="skillType">Skills</span>
              <div className="skillCat">
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    <i class="fa-brands fa-html5"></i>
                    <span className="skillCatTitle">Html5</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    <i class="fa-brands fa-js"></i>
                    <span className="skillCatTitle">JavaScript</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    <i class="fa-brands fa-css3-alt"></i>
                    <span className="skillCatTitle">CSS3</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    <i class="fa-brands fa-java"></i>
                    <span className="skillCatTitle">Java</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    <i class="fa-brands fa-react"></i>
                    <span className="skillCatTitle">Reactjs</span>
                  </span>
                </a>
              </div>
              <div className="skillCat">
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    
                    <span className="skillCatTitle">
                      Adobe Experience Manager
                    </span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                  <i class="fa-brands fa-github"></i>
                    <span className="skillCatTitle">Git</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                  <i class="fa-brands fa-bootstrap"></i>
                    <span className="skillCatTitle">Bootstrap</span>
                  </span>
                </a>
                <a href="#" className="skillCatLinks">
                  <span className="skillCatTypes">
                    
                    <span className="skillCatTitle">
                      UX-Ui Design
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Element>
  );
};

export default Skills;

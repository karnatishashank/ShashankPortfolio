import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Element } from "react-scroll";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7ltke86", "template_yxkd30p", form.current, {
        publicKey: "3-Tm-jeK8vGiXod3X",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Element name="contact" className="element">
    <div>
      <div id="contact">
        <h1 className="contactPageDetails">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the below form to discuss any work oppurtunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitButton">
            Submit
          </button>
          <div className="links">
            <a
              className="linkRedirect"
              target="_blank"
              href="https://www.linkedin.com/in/shashankreddykarnati/"
            >
              <span className="link">
                <i class="fa-brands fa-linkedin"></i>Linkedin
              </span>
            </a>
            <a
              className="linkRedirect"
              target="_blank"
              href="https://github.com/karnatishashank"
            >
              <span className="link">
                <i class="fa-brands fa-github"></i>Git
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
    </Element>
  );
};

export default Contact;

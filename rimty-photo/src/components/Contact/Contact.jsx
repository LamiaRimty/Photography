import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1rn6jb",
        "template_nkyi1ec",
        form.current,
        "ON5GJcYxGhO7RCMs_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <span className="section-subtitle">Get in touch</span>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="animate__animated animate__slideInLeft">
          {/* <!-- INFO 1 --> */}
          {/* <div className="contact-info">
            <i className="uil uil-phone contact-icon"></i>
            <div>
              <h2 className="contact-title">Phone</h2>
              <span className="contact-subtitle">
                <a
                  className="mobile-no"
                  id="phone"
                  href="https://api.whatsapp.com/send?phone=+310626344867"
                >
                  +310626344867
                </a>
              </span>
            </div>
          </div> */}

          {/* <!-- INFO 2--> */}
          <div className="contact-info">
            <i className="uil uil-envelope contact-icon"></i>

            <div>
              <h2 className="contact-title">Email</h2>
              <span className="contact-subtitle">
                <a className="email-id" href="mailto:ljrimty@outlook.com">
                  ljrimty@outlook.com
                </a>
              </span>
            </div>
          </div>

          {/* <!-- INFO 3 --> */}
          <div className="contact-info">
            <i className="uil uil-location-point contact-icon"></i>

            <div>
              <h2 className="contact-title">Location</h2>
              <span className="contact-subtitle">Netherlands</span>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form grid animate__animated animate__slideInRight"
        >
          <div className="contact-inputs grid">
            <div className="contact-content">
              <label for="name" className="contact-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="Name"
                className="contact-input"
              />
            </div>

            <div className="contact-content">
              <label for="email" className="contact-label">
                Your email
              </label>
              <input
                type="text"
                id="email"
                name="Email"
                className="contact-input"
              />
            </div>
          </div>

          <div className="contact-content">
            <label for="message" className="contact-label">
              Your Message
            </label>
            <textarea
              type="text"
              id="message"
              name="Message"
              cols="0"
              rows="7"
              className="contact-input"
            ></textarea>
          </div>

          <div className="animate__animated animate__slideInRight">
            <a href="/#" type="submit" className="button button-flex">
              Send
              <i className="uil uil-message button-icon"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="b-example-divider"></div>
    </section>
  );
}
export default Contact;

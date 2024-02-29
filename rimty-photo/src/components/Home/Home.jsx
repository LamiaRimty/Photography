import React from "react";
import "./Home.css";
import Gallery from "../Gallery/Gallery";
import Blog from "../Blog/Blog";
import Typed from "typed.js";

function Home() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Rimty!", "Frontend Developer", "UI/UX Designer", "Painter"],

      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section id="home">
        <div className="container col-xxl-8 px-4 py-4">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6  home-img animate__animated animate__zoomInDown  animate__delay-1s">
              <img
                src="images/BikerGirl.png"
                // src="https://i.etsystatic.com/8538461/r/il/21a140/1038308502/il_300x300.1038308502_j77d.jpg"
                class="d-block  mx-lg-auto img-fluid"
                alt="biker girl"
                width="500"
                height="500"
                loading="lazy"
              />
            </div>
            {/* <div class=" col-10 col-sm-8 col-lg-6 justify-content-center home-img animate__animated animate__slideInLeft animate__delay-1s">
            <img
              id="rimty"
              src="./images/Rimty.jpg"
              class="about-img d-block mx-lg-auto img-fluid"
              alt="Rimty"
              loading="lazy"
            />
          </div> */}
            <div className="col-lg-6">
              {/* <h3 className="home-subtitle animate__animated animate__backInRight">
              Hello
            </h3> */}
              <h1 className="display-5 fw-bold lh-1 mb-3 home-title animate__animated animate__rollIn">
                Hi,I'm <span ref={el} className="home-typed" />
              </h1>

              <p className="home-desc animate__animated animate__backInRight">
                Travel Photography Blog by{" "}
                <a
                  className="home-desc"
                  href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/"
                >
                  Lamia Jabin Rimty
                </a>
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  href="#contact"
                  type="button"
                  // class="btn btn-outline-secondary btn-lg px-4 button button-flex home-button"
                  className="button btn-lg px-4 me-md-2 animate__animated animate__backInUp animate__delay-1s"
                >
                  Contact Me
                  <i className="uil uil-message button-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="b-example-divider"></div>
      </section>
      {/* <section className="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <div className="home-title">
            <h1 className="home-heading animate__animated animate__zoomIn">
              Travel Photography Blog by{" "}
            </h1>
            <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
              <h3 className="home-subtitle animate__animated animate__lightSpeedInLeft">
                Lamia Jabin Rimty
              </h3>
            </a>
          </div>

          <img
            className="home-img col-xxl-8 px-4 py-4 home-img-div animate__animated animate__zoomInDown  animate__delay-1s"
            alt=""
            // src="https://img.freepik.com/premium-vector/happy-girl-dressed-trendy-clothes-riding-city-bicycle-with-flower-bouquet-front-basket-adorable-young-hipster-woman-bike-cute-pedaling-female-bicyclist-flat-cartoon-vector-illustration_198278-12371.jpg"
            src="images/pngegg.png"
          />
    
        </div>
      </section> */}
      <Gallery />
      <Blog />
    </>
  );
}
export default Home;

import "./Home.css";
// import Gallery from "./Gallery";

function Home() {
  return (
    <>
      <section className="home">
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
          {/* <div className="col-10 col-sm-8 col-lg-6  home-img-div animate__animated animate__zoomInDown  animate__delay-1s"> */}
          <img
            className="home-img col-xxl-8 px-4 py-4 home-img-div animate__animated animate__zoomInDown  animate__delay-1s"
            alt=""
            // src="https://img.freepik.com/premium-vector/happy-girl-dressed-trendy-clothes-riding-city-bicycle-with-flower-bouquet-front-basket-adorable-young-hipster-woman-bike-cute-pedaling-female-bicyclist-flat-cartoon-vector-illustration_198278-12371.jpg"
            src="images/pngegg.png"
          />
          {/* </div> */}
        </div>
        {/* <Gallery /> */}
      </section>
    </>
  );
}
export default Home;

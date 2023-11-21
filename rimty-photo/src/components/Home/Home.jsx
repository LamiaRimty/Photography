import "./Home.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="container container-home col-xxl-8 px-4 py-4">
          <div className="home-title">
            <h1 className="home-heading">
              Travel Photography Blog by{" "}
              <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
                <h3 className="home-subtitle">Lamia Jabin Rimty</h3>
              </a>
            </h1>
          </div>
          {/* <div className="col-10 col-sm-8 col-lg-6  home-img-div animate__animated animate__zoomInDown  animate__delay-1s">*/}
          <img
            className="home-img col-xxl-8 px-4 py-4"
            alt=""
            // src="https://img.freepik.com/premium-vector/happy-girl-dressed-trendy-clothes-riding-city-bicycle-with-flower-bouquet-front-basket-adorable-young-hipster-woman-bike-cute-pedaling-female-bicyclist-flat-cartoon-vector-illustration_198278-12371.jpg"
            src="images/pngegg.png"
          />
          {/* </div> */}
        </div>
      </section>
    </>
  );
}
export default Home;

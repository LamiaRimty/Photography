import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg bg-body-">
        {/* <div class="container col-xxl-8 px-2 py-3 "> */}
        <div className="container-fluid col-xxl-8 px-2 py-0">
          <a className="navbar-brand" href="#home">
            <img
              id="header-img"
              height="30"
              src="images/rimty-logo.png"
              // src="https://h2.commercev3.net/cdn.brecks.com/images/800/89444A.jpg"
              alt="rimty"
            />
            {/* FOTO */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>

              </li>

              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li> */}

              <li id="Home" className="nav-item">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li id="Gallery" className="nav-item">
                <Link to="/Gallery" className="nav-link">
                  GALLERY
                </Link>
              </li>

              <li id="Blog" className="nav-item">
                <Link to="/Blog" className="nav-link">
                  BLOG
                </Link>
              </li>

              <li id="About" className="nav-item">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>

              <li id="Contact" className="nav-item">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* <div className="nav col-md-4 justify-content-end"> */}
            <ul
              className=" nav col-md-4 justify-content-end list-unstyled d-flex "
              id="social-links"
            >
              <li className="ms-3 social-links" id="social-links">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.facebook.com/L.J.Rimty"
                >
                  <i className="fa-brands fa-facebook header-icon"></i>
                </a>
              </li>
              <li className="ms-3 social-links" id="social-links">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.instagram.com/ik_rimty?fbclid=IwAR16dk9evu7OMdz1STbLtI2xAwTaPAo6KdBDXHD9kek9bcdvgtgEK9f7qIw"
                >
                  <i className="fa-brands fa-instagram header-icon"></i>
                </a>
              </li>
              <li className="ms-3 social-link" id="social-links">
                <a
                  className="footer-link text-body-secondary"
                  href="https://www.youtube.com/channel/UCQ2ahPn5cdvouccPDnT3oGg"
                >
                  <i className="fa-brands fa-youtube header-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="header-button">☀️</button>
      </nav>
    </section>
  );
}
export default Header;

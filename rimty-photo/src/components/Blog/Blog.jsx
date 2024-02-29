import "./Blog.css";
import { Link } from "react-router-dom";
import { data } from "../../assets/data/blogData";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

function Blog() {
  return (
    <section id="blogs">
      <div className="album py-5 bg-body-">
        <h2 className="section-title">Photo Album</h2>
        <span className="section-subtitle">
          I love nature 🌿 I like to capture every moment wherever I
          go.Throughout this album, I'll share my experience of traveling.🚶🏻‍♀️
        </span>
        <div className="container">
          {/* Album card codes */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item) => (
              <div className="col">
                <div className="main animate__animated animate__zoomInUp">
                  <ul className="cards">
                    <div className="cardItems shadow-sm " key={item.id}>
                      <div className="card">
                        <img
                          className="bd-placeholder-img card-image-top"
                          width="80%"
                          height="300"
                          src={item.cover}
                          alt=""
                        ></img>
                        <div className="card-body">
                          <Link to={`/details/${item.id}`} className="link">
                            <h3 className="title">{item.title}</h3>
                          </Link>
                          <span className="location">
                            <IoLocation />
                            {item.location}
                          </span>
                          <h5 className="qoute">{item.qoute}</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            {/* <div class="btn-group">
                        <Link to="/blogId">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                          >
                            More
                          </button>
                        </Link>

                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div> */}
                            <small className="text-body-secondary">
                              {" "}
                              <AiOutlineClockCircle className="clock-icon" />{" "}
                              {item.time}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* 
postData card code */}
        </div>
      </div>
    </section>
  );
}
export default Blog;

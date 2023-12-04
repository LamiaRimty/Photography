import "./Blog.css";
import { Link } from "react-router-dom";
import { data } from "../../assets/data/blogData";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";

function Blog() {
  return (
    <section id="blogs">
      <div class="album py-5 bg-body-">
        <h2 className="section-title">Photo Album</h2>
        <span className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </span>
        <div class="container">
          {/* Album card codes */}
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {data.map((item) => (
              <div class="col">
                <div class="card cardItems shadow-sm " key={item.id}>
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src={item.cover}
                    alt=""
                  ></img>
                  <div class="card-body">
                    <Link to={`details/${item.id}`} className="link">
                      <h3 className="title">{item.title}</h3>
                    </Link>
                    <span className="location">
                      <IoLocation />
                      {item.location}
                    </span>
                    <h5 className="qoute">{item.qoute}</h5>
                    <div class="d-flex justify-content-between align-items-center">
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
                      <small class="text-body-secondary">
                        {" "}
                        <AiOutlineClockCircle className="clock-icon" />{" "}
                        {item.time}
                      </small>
                    </div>
                  </div>
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

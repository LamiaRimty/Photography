import "./Blog.css";
import { Link } from "react-router-dom";
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
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/keukenof.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Keukenof</h2>
                  <span>📍Lisse,Netherlands</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">⏱12-12-2022</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/leeuwarden.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">leeuwarden</h2>
                  <span>📍Netherlands</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/luxemburg.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Old luxemburg</h2>
                  <span>📍luxemburg</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/maastrict.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Tristate</h2>
                  <span>📍Netherlands</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/belgium.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Night Life in Brussels</h2>
                  <span>📍Belgium</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/bikes.jpeg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Bikes</h2>
                  <span>📍Ostvarders,Flevoland</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/pngegg.png"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Sofia Evening</h2>
                  <span>📍Sofia,Bulgaria</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/rimty-logo.png"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Rila Monastary</h2>
                  <span>📍Bulgaria</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src="./images/kashful.jpg"
                  alt=""
                ></img>
                <div class="card-body">
                  <h2 className="title">Light Festivals</h2>
                  <span>📍Eindhovan</span>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
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
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/blogData";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    let blogs = data.find((blogs) => blogs.id === parseInt(id));

    if (blogs) {
      setBlogs(blogs);
    }
  }, [id]);

  return (
    <>
      {blogs ? (
        <section className="singleBlog">
          <div class="container px-4  my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold text-body-emphasis">{blogs.title}</h1>

            <div class=" overflow-hidden">
              <div class="left container px-5">
                <img
                  src={blogs.cover}
                  class="img-fluid detail-img border rounded-3 shadow-lg mb-4"
                  alt=""
                  // width="700"
                  // height="500"
                  loading="lazy"
                />
              </div>
              <div className="right">
                <div className="buttons">
                  <button className="button">
                    <BsPencilSquare />
                  </button>

                  <button className="button">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-12 mx-auto">
              <p className="location">{blogs.location}</p>
              <p>{blogs.time}</p>
              <p class="lead mb-4">
                <>{blogs.details}</>
              </p>
              {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button
                  type="button"
                  class="btn btn-primary btn-lg px-4 me-sm-3"
                >
                  Primary button
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Secondary
                </button>
              </div> */}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Details;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../assets/data/blogData";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import "./Details.css";

function Details() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(data);

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
          {/* <div class="px-4 pt-4 my-5 text-center border-bottom"> */}
          <div
            className="container px-4  my-5 text-center border-bottom"
            key="{blogs.id}"
          >
            <div className=" overflow-hidden">
              <div className="left">
                {/* <div class="left container px-5"> */}
                <img
                  src={blogs.cover}
                  className="img-fluid detail-img border rounded-3 shadow-lg mb-4"
                  alt="details-img"
                  // width="700"
                  // height="500"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "placeholder-image-url.jpg"; // Provide a URL to a placeholder image
                  }}
                />
              </div>
              <div className="right">
                <div className="buttons">
                  <button className="button  me-sm-3">
                    <BsPencilSquare />
                  </button>

                  <button className="button me-sm-3">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mx-auto">
              <h1 className="blogstitle">{blogs.title}</h1>

              <p className="blogslocation">
                <IoLocation className="blogslocationIcon" />
                {blogs.location}
              </p>
              <p className="blogstime">
                <AiOutlineClockCircle className="blogsClockIcon" /> {blogs.time}
              </p>
              <p className="blogsdetails ">{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Details;

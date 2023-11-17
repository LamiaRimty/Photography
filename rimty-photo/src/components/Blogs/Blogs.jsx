import "./Blogs.css";

function Blogs() {
  return (
    // <section id="blogs">
    //   <div class="album py-5 bg-body-">
    //     <h2 className="section-title">Photo Album</h2>
    //     <span className="section-subtitle">
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text ever
    //       since the 1500s.
    //     </span>
    //     <div class="container">
    //       <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/keukenof.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/leeuwarden.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/luxemburg.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/maastrict.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/belgium.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/bikes.jpeg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/pngegg.png"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/rimty-logo.png"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col">
    //           <div class="card shadow-sm">
    //             <img
    //               class="bd-placeholder-img card-img-top"
    //               width="100%"
    //               height="225"
    //               src="./images/kashful.jpg"
    //               alt=""
    //             ></img>
    //             <div class="card-body">
    //               <p class="card-text">
    //                 This is a wider card with supporting text below as a natural
    //                 lead-in to additional content. This content is a little bit
    //                 longer.
    //               </p>
    //               <div class="d-flex justify-content-between align-items-center">
    //                 <div class="btn-group">
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     View
    //                   </button>
    //                   <button
    //                     type="button"
    //                     class="btn btn-sm btn-outline-secondary"
    //                   >
    //                     Edit
    //                   </button>
    //                 </div>
    //                 <small class="text-body-secondary">9 mins</small>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="blogs">
      <section className="flex left-section">
        <button className="active">All Blogs</button>
        <button>Bangladesh</button>
        <button>Netherlands</button>
        <button>Belgium</button>
        <button>Luxemburg</button>
        <button>Bulgaria</button>
      </section>

      <section className="right-section">
        <article className="card">
          <img className="blog-img" src="images/keukenof.jpg" alt="" />
          <div style={{ width: "266px" }} className="box">
            <h4 className="title">Keukenof Garden</h4>
            <span className="subtitle">📍Lisse,The Netherlands</span>
            <p className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex icons">
              <div className="date">⏱20-03-2023</div>
              <a>
                <span className="more">More</span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
export default Blogs;

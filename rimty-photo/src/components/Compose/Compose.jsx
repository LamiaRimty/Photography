import "./Compose.css";
function Compose() {
  return (
    <>
      <section id="newblog">
        <div className="container comp-container col-xxl-8 px-4 py-4">
          <img
            className="col-xxl-8 px-4 py-4 composeImg animate__animated animate__zoomInDown  animate__delay-1s"
            alt="comp-img"
            src="images/kashful.jpg"
          />

          <form className="composeForm">
            <div className="composeFormGroup flexCenter">
              <label htmlFor="file">Upload Image</label>
              <input
                id="fileInput"
                accept="image/*"
                className="composeBlog"
                type="file"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Title</label>
              <input
                className="composeBlog"
                type="text"
                placeholder="Title"
                autoFocus={true}
              />
            </div>
            <div className="composeFormGroup">
              <label>Time</label>
              <input
                className="composeBlog"
                type="text"
                placeholder="Time"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup">
              <label>Qoute</label>
              <input
                className="composeBlog"
                type="text"
                placeholder="Qoute"
                autoFocus={true}
              />
            </div>

            <div className="composeFormGroup" id="composeEdit">
              <label>Description</label>
              <textarea
                className="composeBlog"
                type="text"
                placeholder="Write a blog..."
                cols="100"
                rows="10"
              ></textarea>
            </div>

            <button
              className="composeBlogBtn button"
              type="submit"
              autoComplete="off"
            >
              Publish
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Compose;

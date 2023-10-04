import "./Cover.css";
// import kayak from "../assets/kayak.mp4";
function Cover() {
  return (
    <section className="cover">
      <div className="overlay"></div>
      <video className="cover-img" src="videos/banana.mp4" />
      {/* <video src={kayak} autoPlay loop muted /> */}
      <div className="content">
        <h1>Fotographie</h1>
        <p>Photography website by Rimty</p>
      </div>
    </section>
  );
}
export default Cover;

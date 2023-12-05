//import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Compose from "./components/Compose/Compose";
import "./App.css";
import Blog from "./components/Blog/Blog";
// import Parallax from "./components/Parallax/Parallax";

// import Cover from "./components/Cover/Cover";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Redirect,Navigate
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compose" element={<Compose />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

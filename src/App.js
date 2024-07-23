import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home  from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import  Winner from "./components/Pages/Winner"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Score from "./components/Pages/Score"
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact  from "./components/Pages/Contact";
import Footer from "./components/Pages/footer"

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/winner" element={<Winner />} />
            <Route path="/score" element={<Score />} />

          </Routes>
          
        </div>
        

      </Router>
  
  </>
  );
}

export default App;

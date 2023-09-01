import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Portfolio1 from "./Pages/PortfolioDetails/Portfolio1";
import Portfolio2 from "./Pages/PortfolioDetails/Portfolio2";
import Portfolio3 from "./Pages/PortfolioDetails/Portfolio3";
import Portfolio4 from "./Pages/PortfolioDetails/Portfolio4";
import Portfolio5 from "./Pages/PortfolioDetails/Portfolio5";
import Portfolio6 from "./Pages/PortfolioDetails/Portfolio6";
import Portfolio7 from "./Pages/PortfolioDetails/Portfolio7";
import Portfolio8 from "./Pages/PortfolioDetails/Portfolio8";
import Dropdown from "react-bootstrap/Dropdown";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio/portfolio4" element={<Portfolio4 />} />
          <Route path="/portfolio/portfolio5" element={<Portfolio5 />} />
          <Route path="/portfolio/portfolio6" element={<Portfolio6 />} />
          <Route path="/portfolio/portfolio7" element={<Portfolio7 />} />
          <Route path="/portfolio/portfolio8" element={<Portfolio8 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

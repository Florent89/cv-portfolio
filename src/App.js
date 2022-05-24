import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Knowledges from "./Pages/Knowledges";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        {/* <Header />
        <NavBar /> */}
        <Routes>
          <Route path="/cv-portfolio/" element={<Home />} />
          <Route path="/cv-portfolio/contact" element={<Contact />} />
          <Route path="/cv-portfolio/portfolio" element={<Portfolio />} />
          <Route path="/cv-portfolio/competences" element={<Knowledges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

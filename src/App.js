import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Knowledges from "./Pages/Knowledges";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div>
        {/* <Header />
        <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

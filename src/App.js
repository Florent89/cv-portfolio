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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/competences" element={<Knowledges />} />
          <Route element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      {/* <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes> */}
    </div>
  );
};

export default App;

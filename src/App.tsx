import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      {/* <Routes>
        <Route path="/loading" element={<Loading />} />
      </Routes> */}
    </div>
  );
};

export default App;

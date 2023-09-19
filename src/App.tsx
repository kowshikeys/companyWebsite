import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";
import NotFound from "./Pages/NotFound";
import Response from "./components/Response";
import Home from "./Pages/Home";
import CommingSoon from "./Pages/Blog";

const App: React.FC = () => {
  // useEffect(() => {
  //   const refreshPage = () => {
  //     window.location.reload();
  //   };

  //   const interval = setInterval(refreshPage, 40 * 1000); // Refresh every 1 minute

  //   return () => {
  //     clearInterval(interval); // Clear the interval when the component unmounts
  //   };
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/blog" element={<CommingSoon />} />
    </Routes>
  );
};

export default App;

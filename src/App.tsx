import React from "react";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";
import NotFound from "./Pages/NotFound";
import Response from "./components/Response";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogPost1 from "./components/BlogPage/BlogPost/BlogPost1";
import BlogPost2 from "./components/BlogPage/BlogPost/BlogPost2";
import BlogPost3 from "./components/BlogPage/BlogPost/BlogPost3";


const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/the-money-speech" element={<BlogPost1 />} />
      <Route path="/blog/help-yourself" element={<BlogPost2 />} />
      <Route path="/blog/going-clean" element={<BlogPost3 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

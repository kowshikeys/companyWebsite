import React from "react";
import "./Blog.scss";
import BlogPage from "../../components/BlogPage";
import Footer from "../../components/Footer";
import Response from "../../components/Response";
import { useMediaQuery } from "usehooks-ts";

const Blog = () => {
  const isTab = useMediaQuery("(max-width:768px)");

  return (
    <div>
      {!isTab ? (
        <>
          <section>
            <div className="blog-app">
              <BlogPage />
            </div>
            <Footer />
          </section>
        </>
      ) : (
        <Response />
      )}
    </div>
  );
};

export default Blog;

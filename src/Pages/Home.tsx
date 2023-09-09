import React from "react";
import Hero from "../components/Hero";
import Response from "../components/Response";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <div className="app">
          <Hero />
        </div>
      </section>
      <section style={{ backgroundColor: "turquoise" }}>
        <Footer />
      </section>

      {/* <Response /> */}
    </div>
  );
};

export default Home;

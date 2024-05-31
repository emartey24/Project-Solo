import React from "react";
import Layout from "./Layout";
import CarouselPage from "./CarouselPage";

function Home() {
  return (
    <>
    <Layout />
    <div className="Home-Page">
      <h1>ARTICLEVERSE</h1>
    </div>
    <CarouselPage />
    </>
  );
}

export default Home;

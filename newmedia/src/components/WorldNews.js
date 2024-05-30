import React, { useState } from "react";
import Hero from "./Hero";
import Category from "./Category";
import Main from "./Main";
import Layout from "./Layout";

function WorldNews() {
  const [search, setSearch] = useState("everything");
  return (
    <div>
    <Layout />
      <h1>WorldNews</h1>
      <Hero setSearch={setSearch} />
      <Category setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}

export default WorldNews;

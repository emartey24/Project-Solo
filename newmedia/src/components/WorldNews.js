import React, { useState } from "react";
import Hero from "./Hero";
import Category from "./Category";
import Main from "./Main";
import Layout from "./Layout";

function WorldNews() {
  // Setting the initial state to "everything" ensures that the app fetches and displays news articles right away.
  const [search, setSearch] = useState("everything");
  return (
    <div>
    <Layout />
    {/* Renders the Hero component and passes the setSearch function as a prop. This allows the Hero component to update the search state when the user performs a search. */}
      <Hero setSearch={setSearch} /> 
      <Category setSearch={setSearch} />
      <Main search={search} />
    </div>
  );
}

export default WorldNews;

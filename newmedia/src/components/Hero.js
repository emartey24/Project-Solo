import React, { useState } from "react";


// The Hero component receives a prop called setSearch that will be used to perform the search.
const Hero = ({ setSearch }) => {  

// name: This is a state variable that holds the current value of the input field.
// setName: This is a function that updates the name state variable.
  const [name, setName] = useState("");

  // calls the setSearch function (provided via props) with the current value of the name state variable. This effectively performs the search when the button is clicked.
  const searchnews = () => {
    setSearch(name);
  };

  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>New Media</h4>
            <p>All new news is an old news happenning to new people</p>
            <input
              type="text"
              placeholder=""
              onChange={(e) => {
                setName(e.target.value);  //An event handler that updates the name state variable whenever the input value changes.
              }}
              className="input-bar"
            />
            {/* This is a button that, when clicked, calls the searchnews function to perform the search. */}
            <button className="hero-btn" onClick={searchnews}> 
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;

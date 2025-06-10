import React from "react";
import { name, city } from "../data/data.js";

function Home({name , city}) {
  // update the JSX being returned!
  return (
    <div id = "home">
      <h1 style = {{color : "firebrick"}}>
        {name} is a web developer from {city}
      </h1>
    </div>
  )}
export default Home;

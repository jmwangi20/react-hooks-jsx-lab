import React from "react";
import { image } from "../src/data/data.js";

function About() {
  return (
    <div id = "about">
      <h2>About me</h2>
      <p>This is some information about my background as a web developer</p>
      <img src={user.image} alt="I made this" />
    </div>
  )
}

export default About;

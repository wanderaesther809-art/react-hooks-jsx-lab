import React from "react";
import image from "../images/profile.jpg"; // or whatever image file the starter gives you

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I’m a passionate developer who loves building web apps!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

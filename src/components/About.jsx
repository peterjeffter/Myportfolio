import React from "react";
import Hirebutton from "../hirebutton";


const About = () => {
 
  return (
    <section id="about" className={"about"}>
      <p>
      Hi there! I’m a frontend developer with a knack for transforming creative ideas into seamless, interactive web experiences. My expertise lies in crafting visually stunning, responsive, and user-friendly interfaces that capture attention.
      Every line of code I write reflects my dedication to clean design, innovation, and functionality. From sleek animations to intuitive layouts, I thrive on pushing the boundaries of web design to create solutions that truly stand out.
      Let’s collaborate to turn your vision into a masterpiece that resonates with your audience. Ready to build something extraordinary? Let’s make it happen!
      </p>
      <Hirebutton className={"hire-about"}/>
    </section>
  );
};

export default About;

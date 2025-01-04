import React from "react";
import Hirebutton from "../hirebutton";
const Mainpage = () => {
   return(
    <div className="personal-div">
    <section className="text-section">
      <p>
        Hi, I'm Ternder Toryila, 
        a frontend developer 
        ready to bring your ideas to life with 
        creative and effective solutions.
      </p>
      <Hirebutton className={'hire-btn'}/>
    </section>  
    <img className="my-image" />    
  </div>
   )
}
export default Mainpage;
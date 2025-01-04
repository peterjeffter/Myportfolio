import React from "react";

const Header = ({ onProjectsClick, onAboutClick, onContactClick }) => {
  return (
    <header className="header">

      <div> <a className="link-button" onClick={onProjectsClick}>
          Projects
        </a>
        <i class="fa-solid fa-play"></i>
      </div>
       
      <div>
        <a className="contact-button" onClick={onContactClick}>
          Contact
        </a>
        <i class="fa-solid fa-play"></i>
      </div>
        
     
    </header>
  );
};

export default Header;

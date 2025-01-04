import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Closebutton from "./close";
import Mainpage from "./components/Mainpage";
import "./App.css";

const Popup = ({ isVisible, onClose, children, className }) => {
  if (!isVisible) return null;

  return (
    <div className={`popup ${className}`}>
      <div className="popup-content">
        <Closebutton onClose={onClose} />
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [visiblePopup, setVisiblePopup] = useState(null);
  const [projectsResetTrigger, setProjectsResetTrigger] = useState(0);

  const togglePopup = (popupName) => {
    const isPopupClosing = visiblePopup === popupName;
    setVisiblePopup(isPopupClosing ? null : popupName);

    // Reset projects animation when the popup is opened
    if (!isPopupClosing && popupName === "projects") {
      setProjectsResetTrigger(Date.now()); // Trigger reset
    }

    document.body.style.overflow = isPopupClosing ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && visiblePopup) {
        setVisiblePopup(null);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visiblePopup]);

  return (
    <div className="App">
      <h1>TERNDER TORYILA</h1>

      <Header
        onProjectsClick={() => togglePopup("projects")}
        onContactClick={() => togglePopup("contact")}
      />

      <Mainpage />

      {/* Projects Popup */}
      <Popup
        isVisible={visiblePopup === "projects"}
        onClose={() => togglePopup("projects")}
        className="popup-projects"
      >
        <Projects resetTrigger={projectsResetTrigger} />
      </Popup>

      {/* Contact Popup */}
      <Popup
        isVisible={visiblePopup === "contact"}
        onClose={() => togglePopup("contact")}
        className="popup-contact"
      >
        <Contact />
      </Popup>
      
    </div>
  );
};

export default App;

import React from "react";
import closeImage from "./close.svg";

const Closebutton = ({ onClose }) => {
  return (
    <i className="fa-thin fa-x"
      onClick={onClose}
      src={closeImage}
      alt="Close button"
    />
  );
};

export default Closebutton;

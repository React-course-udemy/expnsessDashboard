import React from "react";
import "../../css/UI/Card.css";

const Card = ({ children, classes }) => {
  // return(React.createElement('div',{className: classes? classes:''}, {children}))
  return <div className={`card ${classes? classes : ''}`}>{ children }</div>;
};

export default Card;

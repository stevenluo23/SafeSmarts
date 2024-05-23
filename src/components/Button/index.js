"use client";

import React from "react";
import Link from "next/link";

const Button = ({ href, children, className, width = "100px", height = "40px", color = "white", bgColor = "var(--rich-green)", boxShadow = "", onClick = () => {} }) => {
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
    borderRadius: "10px",
    backgroundColor: bgColor,
    color,
    fontSize: "0.8rem",
    textDecoration: "none",
    boxShadow: boxShadow,
    cursor: "pointer",
    border: "none",
  };

  if (href) {
    return (
      <Link href={href}>
        <button style={buttonStyles} className={className} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button style={buttonStyles} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;

import React from "react";
import Link from "next/link";

const Button = ({ href, children, className, width = "100px", height = "40px", color = "white", bgColor = "var(--rich-green)", boxShadow = "" }) => {
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
  };

  return (
    <Link href={href}>
      <span style={buttonStyles} className={className}>
        {children}
      </span>
    </Link>
  );
};

export default Button;

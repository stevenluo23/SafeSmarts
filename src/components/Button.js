import React from "react";
import Link from "next/link"; // Assuming you're using Next.js

const Button = ({ href, children, style, className }) => {
  // Define default styles
  const defaultStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "var(--rich-green)",
    color: "white",
    fontSize: "0.8rem",
    textDecoration: "none", // To remove underline from links
  };

  // Combine default styles with any custom styles passed via props
  const combinedStyles = { ...defaultStyle, ...style };

  return (
    <Link href={href} passHref>
      <span style={combinedStyles} className={className}>
        {children}
      </span>
    </Link>
  );
};

export default Button;

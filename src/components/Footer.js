import Link from "next/link";
import "./Footer.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  const year = new Date().getFullYear(); // Get the current year

  return <footer>&copy; {year} SafeSmarts. All rights reserved.</footer>;
};

export default Footer;

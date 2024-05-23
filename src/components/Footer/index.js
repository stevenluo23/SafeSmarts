import styles from "./Footer.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer className={styles.footer}>&copy; {year} SafeSmarts. All rights reserved.</footer>;
};

export default Footer;

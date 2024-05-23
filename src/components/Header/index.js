import Link from "next/link";
import styles from "./Header.module.css";
import Button from "../Button";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.company}>
        <img src="/SafeSmarts.png" width="50" alt="SafeSmarts logo" />
        <h1>SafeSmarts</h1>
      </Link>
      <div className={`${styles.links} ${inter.className}`}>
        <Link href="/about">About Us</Link>
        <Link href="/features">Features</Link>
        <Button href="/lessons" className={inter.className}>
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;

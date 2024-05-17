import Link from "next/link";
import "./Header.css";
import Button from "./Button";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="company">
        <img src="/SafeSmarts.png" width="50" />
        <h1>SafeSmarts</h1>
      </Link>
      <div className={`links ${inter.className}`}>
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

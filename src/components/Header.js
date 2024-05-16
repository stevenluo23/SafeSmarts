import Link from "next/link";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link href="/" className="company">
        <img src="/SafeSmarts.png" width="20" />
        <h1>SafeSmarts</h1>
      </Link>
      <div className="links">
        <Link href="/about">About Us</Link>
        <Link href="/features">Features</Link>
        <Link href="/lessons">Get Started</Link>
      </div>
    </div>
  );
};

export default Header;

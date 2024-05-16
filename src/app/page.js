import Link from "next/link";
import Button from "@/components/Button";
import styles from "./page.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles["hero-left"]}>
        <h1>Empowering immigrants through fraud awareness.</h1>
        <Button href="/lessons">
          <span className={inter.className}>Get Started</span>
        </Button>
      </div>
      <div className={styles["hero-right"]}>
        <img src="/hero.png" alt="Hero" />
      </div>
    </main>
  );
}

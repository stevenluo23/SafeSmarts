import Link from "next/link";
import styles from "./Lessons.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Lessons = () => {
  return (
    <main className={inter.className}>
      <div className={styles.lessons}>
        <h1>Lessons</h1>
      </div>
      <div className={styles["lessons-container"]}>
        <Link href="/lessons/1">
          <img src="/hero.png" alt="Module 1" />
          <h1>MODULE 1: Understanding Common Types of Fraud</h1>
        </Link>
        <Link href="/lessons/2">
          <img src="/hero.png" alt="Module 2" />
          <h1>MODULE 2: Protective Measures and Resources</h1>
        </Link>
        <Link href="/lessons/3">
          <img src="/hero.png" alt="Module 3" />
          <h1>MODULE 3: Reporting and Recovering from Fraud</h1>
        </Link>
      </div>
    </main>
  );
};

export default Lessons;

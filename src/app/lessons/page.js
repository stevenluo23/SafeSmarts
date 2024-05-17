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
          <img src="/passport.png" alt="Module 1" />
          <div className={styles["module-description"]}>
            <h2>Module 1</h2>
            <h1>Understanding Common Types of Fraud</h1>
            <p>Learn about the most common types of fraud and how to protect yourself from falling victim to them.</p>
          </div>
        </Link>
        <Link href="/lessons/2">
          <img src="/protect.png" alt="Module 2" />
          <div className={styles["module-description"]}>
            <h2>Module 2</h2>
            <h1>Protective Measures and Resources</h1>
            <p>Discover the tools and resources available to safeguard your personal information and prevent fraud.</p>
          </div>
        </Link>
        <Link href="/lessons/3">
          <img src="/recover.jpg" alt="Module 3" />
          <div className={styles["module-description"]}>
            <h2>Module 3</h2>
            <h1>Reporting and Recovering from Fraud</h1>
            <p>Learn how to report fraudulent activities and take steps to recover from the impact of fraud.</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Lessons;

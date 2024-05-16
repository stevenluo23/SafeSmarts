import Link from "next/link";
import "./Lessons.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Lessons = () => {
  return (
    <main className={inter.className}>
      <div className="lessons">
        <h1>Lessons</h1>
      </div>
      <div className="lessons-container">
        <Link href="/lessons/1">
          <img src="/hero.png" alt="Module 1" />
          <h1>Module 1</h1>
        </Link>
        <Link href="/lessons/2">
          <img src="/hero.png" alt="Module 2" />
          <h1>Module 2</h1>
        </Link>
        <Link href="/lessons/3">
          <img src="/hero.png" alt="Module 3" />
          <h1>Module 3</h1>
        </Link>
      </div>
    </main>
  );
};

export default Lessons;

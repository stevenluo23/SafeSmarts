import styles from "./Features.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Features = () => {
  return (
    <article className={`${styles.article} ${inter.className}`}>
      <h2 className={styles.title}>Our Key Features</h2>
      <ul>
        <li className={styles.li}>
          <strong>Text-To-Speech:</strong> Our platform offers text-to-speech functionality, making it easier for users to learn by listening, accommodating various learning styles and needs.
        </li>
        <li className={styles.li}>
          <strong>Translation:</strong> Understanding the importance of accessibility, our service includes translation features to help users learn in their preferred language.
        </li>
        <li className={styles.li}>
          <strong>Easy to Understand Fraud Prevention Lessons:</strong> We provide lessons on fraud prevention that are designed to be straightforward and engaging, ensuring that users can easily
          grasp and apply the concepts.
        </li>
      </ul>
    </article>
  );
};

export default Features;

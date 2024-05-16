import Button from "@/components/Button";
import styles from "./page.module.css";

import { Inter } from "next/font/google";
import Card from "@/components/Card";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
      <section className={styles.identity}>
        <img src="/security.png"></img>
        <div>
          <p>Enroll in identity theft protection services to monitor your personal information and receive alerts about suspicious activities</p>
          <div className={styles.button}>
            <Button href="/" className={inter.className}>
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.educate}>
        <div className={styles["educate-left"]}>
          <h1>Educate Yourself:</h1>
          <div className={styles.cards}>
            <Card>
              <h1>Fraud Prevention Tips</h1>
              <p>Summaries of common scams and proactive strategies to avoid fraud.</p>
              <Button href="/lessons" className={inter.className} width="100%" color="black" bgColor="#ebfef2" boxShadow="5px 5px 7px 0px rgba(0,0,0,0.5)">
                Find out more &rarr;
              </Button>
            </Card>
            <Card>
              <h1>Success Stories</h1>
              <p>Inspiring narratives of immigrants who overcame challenges with the help of SafeSmarts.</p>
              <Button href="/" className={inter.className} width="100%" color="black" bgColor="#ebfef2" boxShadow="5px 5px 7px 0px rgba(0,0,0,0.5)">
                Find out more &rarr;
              </Button>
            </Card>
            <Card>
              <h1>Legal Resources</h1>
              <p>Utilize free or low-cost legal services provided by nonprofit organizations or community groups to navigate legal challenges and protect your rights.</p>
              <Button href="/lessons" className={inter.className} width="100%" color="black" bgColor="#ebfef2" boxShadow="5px 5px 7px 0px rgba(0,0,0,0.5)">
                Find out more &rarr;
              </Button>
            </Card>
            <Card>
              <h1>Emotional Support</h1>
              <p>Access to counseling and support groups designed to provide emotional assistance and a sense of community among immigrants.</p>
              <Button href="/" className={inter.className} width="100%" color="black" bgColor="#ebfef2" boxShadow="5px 5px 7px 0px rgba(0,0,0,0.5)">
                Find out more &rarr;
              </Button>
            </Card>
          </div>
        </div>
        <img src="/educate.png"></img>
      </section>
    </>
  );
}

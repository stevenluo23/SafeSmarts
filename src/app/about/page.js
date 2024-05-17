import styles from "./About.module.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <article className={`${styles.article} ${inter.className}`}>
      <section className={styles.section}>
        <h1 className={styles.title}>Meet SafeSmarts</h1>
        <h2>Our Mission</h2>
        <p className={styles.p}>
          At SafeSmarts, our mission is to empower individuals affected by fraud through education, support, and community engagement. We aim to provide a safe and welcoming space where people can
          share their stories, access valuable resources, and find the emotional support they need to recover and rebuild their lives. We understand that the impact of fraud extends beyond financial
          loss; it can cause significant emotional and psychological stress. Our community forum is dedicated to helping individuals navigate these challenges by fostering a supportive environment
          where they can connect with others who have faced similar experiences. Through our platform, we strive to: <strong>Raise Awareness:</strong> Educate our community about the various forms of
          fraud and how to protect themselves. <strong>Provide Resources:</strong> Offer access to trusted information, tools, and services that aid in preventing and addressing fraud.{" "}
          <strong>Offer Support:</strong> Create a network of support where members can share their experiences, seek advice, and offer encouragement to one another.{" "}
          <strong>Advocate for Change:</strong> Work towards systemic changes that enhance consumer protection and reduce the prevalence of fraud. By bringing together individuals, experts, and
          advocates, SafeSmarts is committed to making a positive impact in the fight against fraud and helping our community members lead safer, more secure lives.
        </p>
      </section>
      <section className={styles.section}>
        <h1>Who We Help</h1>
        With the rise of immigration-related scams and deceptive practices, there is an urgent need for a comprehensive platform that empowers immigrants with the knowledge, tools, and support to
        safeguard their rights and resources. SafeSmarts seeks to bridge this gap by providing accessible, multilingual resources, legal assistance, community forums, and proactive fraud prevention
        strategies tailored to the unique needs of immigrant communities.
      </section>
      <section className={styles.section}>
        <h1>Our Solution</h1>
        By equipping immigrants with the necessary skills and awareness, SafeSmarts aims to mitigate the risk of fraud, promote financial independence, and foster a sense of security and belonging in
        their new homes.
      </section>
      <section className={styles.section}>
        <h1>Our Story</h1>
        SafeSmarts was founded by a group of underrepresented students who are deeply moved by the impact of fraud on their loved ones, aiming to fill the critical gap in resources and support for
        victims. Combining expertise in technology, finance, and social services, we created a user-friendly platform to educate and empower individuals against fraud. Central to our mission is
        fostering a vibrant community where members can share their stories, offer support, and find solace in knowing they are not alone. As we grow, our dedication to providing comprehensive
        resources and advocating for stronger consumer protections remains steadfast, driving us to build a safer, more informed community.
      </section>
    </article>
  );
};

export default About;

import styles from "./LessonModule.module.css";
import Spinner from "@/components/Spinner";
import TTSButton from "../../../components/TTSButton";
import LessonNavButtons from "../../../components/LessonNavButtons";

const LessonClient = ({ lessonModule, lessonId, totalLessons }) => {
  if (!lessonModule) {
    return <Spinner />;
  }

  // Function to render sections and sub-sections with added gaps
  const renderSections = (sections) => {
    return sections.map((section, index) => (
      <div key={index} className={styles.section}>
        <h2 className={styles.heading}>{section.heading}</h2>
        {section.paragraphs &&
          section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        {section.subSections &&
          section.subSections.map((subSection, ssIndex) => (
            <div key={ssIndex} className={"sub-section"}>
              <h3 className={styles.heading}>{subSection.subHeading}</h3>
              {subSection.paragraphs.map((paragraph, spIndex) => (
                <p key={spIndex} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
      </div>
    ));
  };

  return (
    <article className={styles.module}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>{lessonModule.title}</h1>
        <TTSButton lessonModule={lessonModule} lessonId={lessonId} />
      </div>
      {lessonModule.sections && renderSections(lessonModule.sections)}
      <LessonNavButtons lessonId={lessonId} totalLessons={totalLessons} />
    </article>
  );
};

export default LessonClient;

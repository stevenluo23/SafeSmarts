import styles from "./LessonModule.module.css";
import Spinner from "@/components/Spinner";
import TTSButton from "@/components/TTSButton";
import LessonNavButtons from "@/components/LessonNavButtons";

async function getLessonData(id) {
  const response = await fetch(`http://localhost:8080/lessons/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data with status: ${response.status}`);
  }

  return response.json();
}

const LessonModulePage = async ({ params }) => {
  const lessonId = parseInt(params.id, 10);

  const lessonModule = await getLessonData(lessonId).catch((error) => {
    console.error("Failed to get lesson data:", error);
    return null;
  });

  const totalLessons = 3; // replace with actual data fetching in the future

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
            <div key={ssIndex} className={styles.subSection}>
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
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{lessonModule.title}</h1>
        <TTSButton lessonModule={lessonModule} lessonId={lessonId} />
      </div>
      {lessonModule.sections && renderSections(lessonModule.sections)}
      <LessonNavButtons lessonId={lessonId} totalLessons={totalLessons} />
    </article>
  );
};

export default LessonModulePage;

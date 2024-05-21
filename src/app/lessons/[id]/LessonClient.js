"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import styles from "./LessonModule.module.css";
import Spinner from "@/components/Spinner";

const inter = Inter({ subsets: ["latin"] });

const LessonClient = ({ lessonModule, lessonId, totalLessons }) => {
  const router = useRouter();
  const [isTTSPlaying, setIsTTSPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const safeSetItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Failed to set item in localStorage:", e);
    }
  };

  const handleTextToSpeechToggle = async () => {
    const cacheKey = `lesson-${lessonId}-tts`;

    if (audio) {
      if (isTTSPlaying) {
        console.log("Pausing audio");
        audio.pause();
        setIsTTSPlaying(false);
      } else {
        console.log("Resuming audio");
        audio.play();
        setIsTTSPlaying(true);
      }
      return;
    }

    let audioUrl = localStorage.getItem(cacheKey);

    // If the audio URL is not in localStorage, fetch a new one from the server
    // Note: localStorage will only work for the first audio request from OpenAI.
    // Subsequent requests will not be stored in localStorage due to space limitations.
    // Therefore, every time you navigate off the module, a new request will be made,
    // which incurs a cost.
    if (!audioUrl) {
      try {
        const response = await fetch("http://localhost:8080/tts/translate-and-speak", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lessonModule }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        audioUrl = data.audioUrl;
        safeSetItem(cacheKey, audioUrl);
      } catch (error) {
        console.error("Error generating speech:", error);
        return;
      }
    }

    console.log("Playing audio");
    const audioElement = new Audio(audioUrl);
    audioElement.play();
    setAudio(audioElement);
    setIsTTSPlaying(true);

    audioElement.onended = () => {
      setIsTTSPlaying(false);
      audioElement.currentTime = 0;
    };
  };

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
        <div className={styles["title-icon-wrapper"]} onClick={handleTextToSpeechToggle}>
          <span>Español</span>
          <img src="/tts.svg" alt="Title Icon" />
        </div>
      </div>
      {lessonModule.sections && renderSections(lessonModule.sections)}
      <div className={styles["lesson-navigation-buttons"]}>
        {lessonId > 1 && (
          <Button onClick={() => router.push(`/lessons/${lessonId - 1}`)} className={inter.className}>
            Previous Module
          </Button>
        )}
        {lessonId < totalLessons ? (
          <Button onClick={() => router.push(`/lessons/${lessonId + 1}`)} className={inter.className}>
            Next Module
          </Button>
        ) : (
          <Button onClick={() => router.push("/lessons")} className={inter.className} width="150px" bgColor="#3498db">
            Back to Lessons
          </Button>
        )}
      </div>
    </article>
  );
};

export default LessonClient;

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Button from "@/components/Button";
import "./LessonModule.module.css";
import path from "path";
import OpenAI from "openai";
import styles from "./LessonModule.module.css";
import Spinner from "@/components/Spinner";
import { useLocalStorageState } from "@/hooks/useLocalStorage";

const inter = Inter({ subsets: ["latin"] });

const modules = [
  {
    title: "Understanding Common Types of Fraud",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Immigrants often face numerous challenges when adjusting to a new country. One of the most significant threats they encounter is fraud. This chapter aims to educate you about the various types of fraud you may encounter and how to recognize them. By understanding these fraudulent schemes, you can better protect yourself and your loved ones.",
        ],
      },
      {
        heading: "Types of Fraud",
        subSections: [
          {
            subHeading: "1. Employment Fraud",
            paragraphs: [
              "Fraudsters offer fake job opportunities to collect personal information or money. These scams often involve promises of high-paying jobs that require upfront fees for processing or training.",
            ],
          },
          {
            subHeading: "2. Romance Scams",
            paragraphs: ["Scammers develop fake online relationships to extort money. They typically prey on emotions, pretending to be in distress and in need of financial assistance."],
          },
          {
            subHeading: "3. Grandparent Scams",
            paragraphs: ["This involves fraudsters posing as relatives, usually grandchildren, who claim to be in urgent need of money due to an emergency."],
          },
          {
            subHeading: "4. Tax Return Scams",
            paragraphs: [
              "Fraudsters file false tax returns using stolen personal information to claim refunds fraudulently. They may also pose as IRS officials demanding immediate payment of taxes to avoid arrest.",
            ],
          },
          {
            subHeading: "5. Immigration Service Scams",
            paragraphs: [
              "Fake lawyers or 'notarios' promise to help with immigration processes for high fees but provide no actual service, leaving victims out of money and still in need of legal help.",
            ],
          },
          {
            subHeading: "6. Tech Support Scams",
            paragraphs: [
              "Scammers pose as tech support representatives from well-known companies, claiming your computer is infected and offering to fix it remotely, only to steal your personal information and money.",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Protective Measures and Resources",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "In this chapter, we will discuss practical strategies and resources to protect yourself from becoming a victim of fraud. By adopting these protective measures, you can significantly reduce your risk and safeguard your personal information and finances.",
        ],
      },
      {
        heading: "Protective Measures",
        subSections: [
          {
            subHeading: "1. Secure Personal Information",
            paragraphs: [
              "Avoid sharing personal details such as your Social Security number, bank account information, or passwords online or over the phone unless you are certain of the recipient's legitimacy.",
            ],
          },
          {
            subHeading: "2. Verify Contacts",
            paragraphs: ["Always check the legitimacy of emails, phone numbers, and websites. Use official websites to verify contact information before responding."],
          },
          {
            subHeading: "3. Use Trusted Services",
            paragraphs: ["Seek help from verified and reputable organizations. Avoid dealing with individuals or companies that cannot provide verifiable credentials or references."],
          },
        ],
      },
      {
        heading: "Resources for Help",
        subSections: [
          {
            subHeading: "1. Consumer Protection Agencies",
            paragraphs: [
              "Contact local consumer protection offices for advice on dealing with fraud and to report scams. Agencies such as the Federal Trade Commission (FTC) in the U.S. provide valuable resources and support.",
            ],
          },
          {
            subHeading: "2. Legal Aid",
            paragraphs: ["Utilize free or low-cost legal services provided by nonprofit organizations or community groups to navigate legal challenges and protect your rights."],
          },
          {
            subHeading: "3. Community Organizations",
            paragraphs: ["Engage with immigrant support groups and community organizations that offer information, support, and resources tailored to immigrants."],
          },
        ],
      },
    ],
  },
  {
    title: "Reporting and Recovering from Fraud",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "If you become a victim of fraud, it is crucial to know the steps to report the incident and begin your recovery process. This chapter provides a detailed guide on how to take action against fraudsters and regain control of your finances and personal information.",
        ],
      },
      {
        heading: "Steps to Take",
        subSections: [
          {
            subHeading: "1. File a Report",
            paragraphs: [
              "Report the fraud to the Federal Trade Commission (FTC) or your local law enforcement agency. Provide as much detail as possible to help them investigate and prevent further scams.",
            ],
          },
          {
            subHeading: "2. Notify Financial Institutions",
            paragraphs: ["Inform your bank and credit card companies about the fraud. They can help protect your accounts and prevent further unauthorized transactions."],
          },
          {
            subHeading: "3. Identity Theft Protection",
            paragraphs: ["Enroll in identity theft protection services to monitor your personal information and receive alerts about suspicious activities."],
          },
          {
            subHeading: "4. Emotional Support",
            paragraphs: ["Fraud can have a significant emotional impact. Seek counseling or join support groups to cope with the stress and anxiety resulting from the incident."],
          },
          {
            subHeading: "5. Restitution",
            paragraphs: [
              "Follow up with authorities and legal aid organizations to pursue restitution if possible. Recovering stolen funds or compensation can help alleviate some of the financial burdens caused by fraud.",
            ],
          },
        ],
      },
    ],
  },
];

const LessonModule = ({ params }) => {
  const router = useRouter();

  const [lessonModule, setLessonModule] = useState(null);
  const [isTTSPlaying, setIsTTSPlaying] = useState(false); // State to track TTS playing status
  const [audio, setAudio] = useLocalStorageState(null, "audio");

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const id = parseInt(params.id, 10) - 1; // Adjust for array indexing and ensure id is a number

  const goToPreviousModule = () => {
    router.push(`/lessons/${id}`);
  };

  const goToNextModule = () => {
    router.push(`/lessons/${id + 2}`);
  };

  const backToLessons = () => {
    router.push("/lessons");
  };

  const handleTextToSpeechToggle = async () => {
    if (isTTSPlaying && audio) {
      audio.pause();
      setIsTTSPlaying(false);
      return;
    }

    const cacheKey = `lesson-${id}-tts`;
    const cachedAudioUrl = localStorage.getItem(cacheKey);

    if (cachedAudioUrl) {
      const audioElement = new Audio(cachedAudioUrl);
      audioElement.play();
      setAudio(audioElement);
      setIsTTSPlaying(true);

      audioElement.onended = () => {
        setIsTTSPlaying(false);
      };
      return;
    }

    try {
      const allText = [
        lessonModule.title,
        ...lessonModule.sections.map((section) =>
          [
            section.heading,
            ...(Array.isArray(section.paragraphs) ? section.paragraphs : []),
            ...(section.subSections ? section.subSections.flatMap((sub) => [sub.subHeading, ...(Array.isArray(sub.paragraphs) ? sub.paragraphs : [])]) : []),
          ].join(". ")
        ),
      ].join(". ");

      const response = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `Translate this English to Spanish in shortest way possible: ${allText}`,
        max_tokens: 3700,
      });
      const translatedText = response.choices[0].text.trim();

      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: translatedText,
        language: "es",
        format: "mp3",
      });

      const buffer = Buffer.from(await mp3.arrayBuffer());
      const audioUrl = "data:audio/mp3;base64," + buffer.toString("base64");
      localStorage.setItem(cacheKey, audioUrl);

      const audioElement = new Audio(audioUrl);
      audioElement.play();
      setAudio(audioElement);
      setIsTTSPlaying(true);

      audioElement.onended = () => {
        setIsTTSPlaying(false);
      };
    } catch (error) {
      console.error("Error generating speech:", error);
    }
  };

  useEffect(() => {
    setLessonModule(modules[id]);
  }, [id]); // Dependency array, ensures useEffect runs once or when `id` changes

  if (!lessonModule) {
    return <Spinner />; // Show a loading state or similar
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

  const allText = [
    lessonModule.title, // Add the lessonModule title at the beginning
    ...lessonModule.sections.map((section) =>
      [
        section.heading,
        // Ensure section.paragraphs is treated as an array
        ...(Array.isArray(section.paragraphs) ? section.paragraphs : []),
        // Check if subSections exists, if not, use an empty array
        ...(section.subSections
          ? section.subSections.flatMap((sub) => [
              sub.subHeading,
              // Ensure sub.paragraphs is treated as an array
              ...(Array.isArray(sub.paragraphs) ? sub.paragraphs : []),
            ])
          : []),
      ].join(". ")
    ),
  ].join(". ");

  return (
    <article className={(inter.className, styles.module)}>
      <div className={styles["title-container"]}>
        <h1 className={styles.title}>{lessonModule.title}</h1>
        <div className={styles["title-icon-wrapper"]} onClick={handleTextToSpeechToggle}>
          <span>Español</span>
          <img src="/tts.svg" alt="Title Icon" />
        </div>
      </div>
      {lessonModule.sections && renderSections(lessonModule.sections)}
      <div className={styles["lesson-navigation-buttons"]}>
        {id > 0 && (
          <Button onClick={goToPreviousModule} className={inter.className}>
            Previous Module
          </Button>
        )}
        {id < modules.length - 1 ? (
          <Button onClick={goToNextModule} className={inter.className}>
            Next Module
          </Button>
        ) : (
          <Button onClick={backToLessons} className={inter.className} width="150px" bgColor="#3498db">
            Back to Lessons
          </Button>
        )}
      </div>
    </article>
  );
};

export default LessonModule;

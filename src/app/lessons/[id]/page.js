"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./LessonModule.css";

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
  const [lessonModule, setLessonModule] = useState(null);
  const id = parseInt(params.id, 10) - 1; // Adjust for array indexing and ensure id is a number

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:8080/lessons/${params.id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLessonModule(data);
      } catch (error) {
        console.error("Failed to fetch lesson module:", error);
        // Use dummy data as fallback
        setLessonModule(modules[id]);
      }
    };

    fetchData();
  }, [id]); // Dependency array, ensures useEffect runs once or when `id` changes

  if (!lessonModule) {
    return <div>Loading...</div>; // Show a loading state or similar
  }

  // Function to render sections and sub-sections
  const renderSections = (sections) => {
    return sections.map((section, index) => (
      <div key={index}>
        <h2>{section.heading}</h2>
        {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
        {section.subSections &&
          section.subSections.map((subSection, ssIndex) => (
            <div key={ssIndex}>
              <h3>{subSection.subHeading}</h3>
              {subSection.paragraphs.map((paragraph, spIndex) => (
                <p key={spIndex}>{paragraph}</p>
              ))}
            </div>
          ))}
      </div>
    ));
  };

  return (
    <article className={inter.className}>
      <h1>{lessonModule.title}</h1>
      {lessonModule.sections && renderSections(lessonModule.sections)}
    </article>
  );
};

export default LessonModule;

"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import "./LessonNavButtons.css";

const inter = Inter({ subsets: ["latin"] });

const LessonNavButtons = ({ lessonId, totalLessons }) => {
  const router = useRouter();

  return (
    <div className="lesson-navigation-buttons">
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
  );
};

export default LessonNavButtons;

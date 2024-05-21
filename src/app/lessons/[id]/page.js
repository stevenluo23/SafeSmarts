import LessonClient from "@/app/lessons/[id]/LessonClient";

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

  return <LessonClient lessonModule={lessonModule} lessonId={lessonId} totalLessons={totalLessons} />;
};

export default LessonModulePage;

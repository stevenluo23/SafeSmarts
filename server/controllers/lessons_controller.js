const { LESSONS } = require("../data/LESSONS_STORE");

function getLessonById(lessonId) {
  // Subtract 1 from the ID to get the array index
  const index = lessonId - 1;
  // Fetch the lesson from the array
  const lesson = LESSONS[index];
  // Return the lesson
  return lesson;
}

module.exports = {
  getLessonById,
};

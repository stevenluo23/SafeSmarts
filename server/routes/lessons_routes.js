const router = require("express").Router();
const { getLessonById } = require("../controllers/lessons_controller");

router.get("/:id", (req, res) => {
  const lessonId = Number(req.params.id);
  const lesson = getLessonById(lessonId);
  res.json(lesson);
});

module.exports = router;

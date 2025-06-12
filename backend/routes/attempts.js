const express = require('express');
const router = express.Router();
const Attempt = require('../models/Attempt');
const Quiz = require('../models/Quiz');
const Question = require('../models/Question');
const authMiddleware = require('../middleware/auth');

router.post('/submit', authMiddleware, async (req, res) => {
  const { quizId, answers } = req.body;
  const userId = req.user.userId;

  try {
    const quiz = await Quiz.findById(quizId).populate('questions');
    let score = 0;

    // Calculate score
    for (const answer of answers) {
      const question = quiz.questions.find(q => q._id.toString() === answer.questionId);
      if (!question) continue;

      // Check if answers match (ignore order)
      const correctSet = new Set(question.correctAnswers.map(String));
      const userSet = new Set(answer.selectedOptions.map(String));
      if (correctSet.size === userSet.size && [...correctSet].every(ans => userSet.has(ans))) {
        score += 1; // 1 point per correct question
      }
    }

    // Save attempt
    const attempt = new Attempt({
      studentId: userId,
      quizId,
      answers,
      score,
    });
    await attempt.save();

    res.json(attempt);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
// Get attempts for a quiz
router.get('/quiz/:quizId', authMiddleware, async (req, res) => {
  try {
    const attempts = await Attempt.find({ quizId: req.params.quizId });
    res.json(attempts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


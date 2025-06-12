const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const authMiddleware = require('../middleware/auth');

// Get questions created by logged-in teacher
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const questions = await Question.find({ createdBy: req.user.userId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create question
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { questionText, options, correctAnswers } = req.body;
    const question = new Question({
      questionText,
      options,
      correctAnswers,
      createdBy: req.user.userId,
    });
    await question.save();
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update question
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const { questionText, options, correctAnswers } = req.body;
    const question = await Question.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      { questionText, options, correctAnswers },
      { new: true }
    );
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete question
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const question = await Question.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId });
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

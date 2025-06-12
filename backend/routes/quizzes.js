// Get quizzes created by logged-in teacher
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ createdBy: req.user.userId });
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

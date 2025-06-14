const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  answers: [{
    questionId: mongoose.Schema.Types.ObjectId,
    selectedOptions: [Number]
  }],
  score: Number,
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attempt', attemptSchema);

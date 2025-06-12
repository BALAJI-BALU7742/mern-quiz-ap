const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswers: [Number],
  type: { type: String, enum: ['MCQ', 'TF'], default: 'MCQ' },
  tags: [String]
});

module.exports = mongoose.model('Question', questionSchema);

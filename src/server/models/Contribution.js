const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  code: String,
  type: String, // e.g., 'coffee', 'journey', 'live-session'
  createdAt: { type: Date, default: Date.now },
  // Add more fields as needed (name, email, etc.)
});

module.exports = mongoose.model('Contribution', ContributionSchema);
// models/Email.js
const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
  recipient: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },

  attachments: {
    type: Array,
    default: [],
  },
  recurrence: {
    type: Object,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Email", EmailSchema);

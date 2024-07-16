const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  agenda: [
    {
      time: String,
      activity: String,
    },
  ],
  guests: [
    {
      name: String,
      email: String,
      rsvp: String,
    },
  ],
  budget: {
    total: Number,
    expenses: [
      {
        category: String,
        amount: Number,
      },
    ],
  },
  vendors: [
    {
      name: String,
      service: String,
      contact: String,
    },
  ],
  schedule: [
    {
      time: String,
      activity: String,
    },
  ],
});

module.exports = mongoose.model('Event', EventSchema);

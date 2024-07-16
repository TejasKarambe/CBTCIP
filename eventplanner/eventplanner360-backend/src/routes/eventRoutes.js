const express = require('express');
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} = require('../controllers/eventcontroller');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST api/events
// @desc    Create event
// @access  Private
router.post('/', auth, createEvent);

// @route   GET api/events
// @desc    Get all events
// @access  Private
router.get('/', auth, getEvents);

// @route   PUT api/events/:id
// @desc    Update event
// @access  Private
router.put('/:id', auth, updateEvent);

// @route   DELETE api/events/:id
// @desc    Delete event
// @access  Private
router.delete('/:id', auth, deleteEvent);

module.exports = router;

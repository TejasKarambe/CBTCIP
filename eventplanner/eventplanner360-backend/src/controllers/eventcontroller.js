const Event = require('../models/event');

exports.createEvent = async (req, res) => {
  const {
    name,
    date,
    time,
    location,
    description,
    agenda,
    guests,
    budget,
    vendors,
    schedule,
  } = req.body;

  try {
    const newEvent = new Event({
      user: req.user.id,
      name,
      date,
      time,
      location,
      description,
      agenda,
      guests,
      budget,
      vendors,
      schedule,
    });

    const event = await newEvent.save();

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ user: req.user.id });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateEvent = async (req, res) => {
  const {
    name,
    date,
    time,
    location,
    description,
    agenda,
    guests,
    budget,
    vendors,
    schedule,
  } = req.body;

  const eventFields = {
    name,
    date,
    time,
    location,
    description,
    agenda,
    guests,
    budget,
    vendors,
    schedule,
  };

  try {
    let event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: 'Event not found' });

    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    event = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: eventFields },
      { new: true }
    );

    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    let event = await Event.findById(req.params.id);

    if (!event) return res.status(404).json({ msg: 'Event not found' });

    if (event.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Event.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Event removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

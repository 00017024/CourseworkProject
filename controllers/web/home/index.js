const ticket_service = require('../../../services/ticket');

const home_controller = {
  index: async (req, res) => {
    res.render('home', { title: 'Home' });
  },
  add: async (req, res) => {
    res.render('home/add_update', { mode: 'Add' });
  },
  update: async (req, res) => {
    try {
      const eventData = await ticket_service.getById(req.params.id);
      res.render('home/add_update', { mode: 'Update', eventData: eventData });
    } catch (error) {
      res.status(404).send('Ticket not found');
    }
  },
};

module.exports = home_controller;
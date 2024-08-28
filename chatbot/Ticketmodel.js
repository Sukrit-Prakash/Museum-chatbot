// models/Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  persons: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;

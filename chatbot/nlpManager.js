// nlpManager.js
const { NlpManager } = require('node-nlp');

// Initialize NLP Manager
const manager = new NlpManager({ languages: ['en'] });

// Train the NLP model with some intents and answers
// Intents
manager.addDocument('en', 'Can you give me information about the museum?', 'museum.info');
manager.addDocument('en', 'What is the museum?', 'museum.info');
manager.addDocument('en', 'Tell me the visiting hours', 'museum.hours');
manager.addDocument('en', 'what are visiting hours', 'museum.hours');
manager.addDocument('en', 'When can I visit the museum?', 'museum.hours');
manager.addDocument('en', 'What time does the museum open?', 'museum.hours');
manager.addDocument('en', 'What time does the museum close?', 'museum.hours');
manager.addDocument('en', 'Is the museum open today?', 'museum.hours');

// Responses
manager.addAnswer('en', 'museum.info', 'The museum showcases a wide range of historical artifacts.');
manager.addAnswer('en', 'museum.hours', 'Opening Hours  Tuesday - Sunday: 10:00 AM - 6:00 PM  and Closed on Mondays and national holidays');

// Ticket confirmation 
manager.addDocument('en', 'Confirm my tickets', 'ticket.confirm');
manager.addDocument('en', 'I want to confirm the tickets', 'ticket.confirm');
manager.addDocument('en', 'Go ahead and confirm the tickets', 'ticket.confirm');
manager.addDocument('en', '[CONFIRM]', 'ticket.confirm');
manager.addDocument('en', 'CONFIRM', 'ticket.confirm');
manager.addAnswer('en', 'ticket.confirm', 'Please confirm your name and the number of tickets to proceed.');

// Ticket booking intents
manager.addDocument('en', 'I want to buy a ticket', 'ticket.purchase');
manager.addDocument('en', 'Buy tickets', 'ticket.purchase');
manager.addAnswer('en', 'ticket.purchase', 'How many tickets would you like to purchase?');

// FOR TICKET BUYING INTENT
manager.addDocument('en', 'I want to buy %number% tickets', 'ticket.count');
manager.addAnswer('en', 'ticket.count', 'Okay, %number% tickets. Please provide your name for the reservation.');

// Capture the user's name
manager.addDocument('en', 'My name is %name%', 'ticket.name');
manager.addDocument('en', 'I am %name%', 'ticket.name');
manager.addDocument('en', 'Call me %name%', 'ticket.name');
manager.addDocument('en', 'It\'s %name%', 'ticket.name');
manager.addDocument('en', 'The name is %name%', 'ticket.name');
manager.addDocument('en', 'Hello, my name is %name%', 'ticket.name');
manager.addDocument('en', 'You can call me %name%', 'ticket.name');
manager.addDocument('en', 'People call me %name%', 'ticket.name');
manager.addDocument('en', 'Everyone calls me %name%', 'ticket.name');
manager.addDocument('en', 'The name you need is %name%', 'ticket.name');

// Use a generic name entity
manager.addNamedEntityText(
  'name',
  'name',
  ['en'],
  ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah']
);

manager.addAnswer('en', 'ticket.name', 'Thank you %name%! Your tickets will be reserved under your name.');

module.exports = manager;

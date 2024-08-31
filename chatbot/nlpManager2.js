const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en', 'es'] });

// English intents and answers
manager.addDocument('en', 'Can you give me information about the museum?', 'museum.info');
manager.addDocument('en', 'What is the museum?', 'museum.info');
manager.addAnswer('en', 'museum.info', 'The museum showcases a wide range of historical artifacts.');

manager.addDocument('en', 'Tell me the visiting hours', 'museum.hours');
manager.addDocument('en', 'what are visiting hours', 'museum.hours');
manager.addDocument('en', 'When can I visit the museum?', 'museum.hours');
manager.addDocument('en', 'What time does the museum open?', 'museum.hours');
manager.addDocument('en', 'What time does the museum close?', 'museum.hours');
manager.addDocument('en', 'Is the museum open today?', 'museum.hours');
manager.addAnswer('en', 'museum.hours', 'Opening Hours  Tuesday - Sunday: 10:00 AM - 6:00 PM  and Closed on Mondays and national holidays');

manager.addDocument('en', 'Confirm my tickets', 'ticket.confirm');
manager.addDocument('en', 'I want to confirm the tickets', 'ticket.confirm');
manager.addDocument('en', 'Go ahead and confirm the tickets', 'ticket.confirm');
manager.addDocument('en', '[CONFIRM]', 'ticket.confirm');
manager.addDocument('en', 'CONFIRM', 'ticket.confirm');
manager.addAnswer('en', 'ticket.confirm', 'Please confirm your name and the number of tickets to proceed.');
// ticket cancellation
manager.addDocument('en', 'Cancel my tickets', 'ticket.cancel');
manager.addDocument('en', 'I want to cancel the tickets', 'ticket.cancel');
manager.addDocument('en', 'Go ahead and cancel the tickets', 'ticket.cancel');
manager.addDocument('en', 'Cancel these tickets', 'ticket.cancel');
manager.addDocument('en', 'Please cancel my tickets', 'ticket.cancel');
manager.addDocument('en', '[CANCEL]', 'ticket.cancel');
manager.addDocument('en', 'CANCEL', 'ticket.cancel');

manager.addAnswer('en', 'ticket.cancel', 'YOUR TICKETS HAS BEEN CANCELLED SUCCESSFULLY');




manager.addDocument('en', 'I want to buy a ticket', 'ticket.purchase');
manager.addDocument('en', 'Buy tickets', 'ticket.purchase');
manager.addAnswer('en', 'ticket.purchase', 'How many tickets would you like to purchase?');

manager.addDocument('en', 'I want to buy %number% tickets', 'ticket.count');
manager.addAnswer('en', 'ticket.count', 'Okay, %number% tickets. Please provide your name for the reservation.');

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
manager.addAnswer('en', 'ticket.name', 'Thank you %name%! Your tickets will be reserved under your name.');

// Spanish intents and answers
manager.addDocument('es', '¿Puedes darme información sobre el museo?', 'museum.info');
manager.addDocument('es', '¿Qué es el museo?', 'museum.info');
manager.addAnswer('es', 'museum.info', 'El museo exhibe una amplia gama de artefactos históricos.');

manager.addDocument('es', 'Dime el horario de visitas', 'museum.hours');
manager.addDocument('es', '¿Cuándo puedo visitar el museo?', 'museum.hours');
manager.addDocument('es', '¿A qué hora abre el museo?', 'museum.hours');
manager.addDocument('es', '¿A qué hora cierra el museo?', 'museum.hours');
manager.addDocument('es', '¿Está abierto el museo hoy?', 'museum.hours');
manager.addAnswer('es', 'museum.hours', 'Horario de apertura: Martes - Domingo: 10:00 AM - 6:00 PM y cerrado los lunes y festivos nacionales.');

manager.addDocument('es', 'Quiero comprar una entrada', 'ticket.purchase');
manager.addDocument('es', 'Comprar entradas', 'ticket.purchase');
manager.addAnswer('es', 'ticket.purchase', '¿Cuántas entradas te gustaría comprar?');

manager.addDocument('es', 'Quiero comprar %number% entradas', 'ticket.count');
manager.addAnswer('es', 'ticket.count', 'Vale, %number% entradas. Por favor, proporciona tu nombre para la reserva.');

manager.addDocument('es', 'Me llamo %name%', 'ticket.name');
manager.addAnswer('es', 'ticket.name', 'Gracias %name%! Tus entradas estarán reservadas a tu nombre.');

// Add named entity for names
manager.addNamedEntityText(
  'name',
  'name',
  ['en', 'es'],
  ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah']
);

// Train and save the model
(async () => {
  await manager.train();
  manager.save();
})();

module.exports = manager;
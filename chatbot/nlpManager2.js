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


// history world and indian questions
// Indian History - Independence
// Indian History - Independence
manager.addDocument('en', 'When did India gain independence?', 'history.india.independence');
manager.addDocument('en', 'Tell me about Indian independence', 'history.india.independence');
manager.addDocument('en', 'On which date did India become independent?', 'history.india.independence');
manager.addDocument('en', 'What year did India get freedom?', 'history.india.independence');
manager.addDocument('en', 'When was India freed from British rule?', 'history.india.independence');
manager.addAnswer('en', 'history.india.independence', 'India gained independence on August 15, 1947. You can visit Hall 5 to explore exhibits on India\'s struggle for independence.');


// Indian History - Mahatma Gandhi
manager.addDocument('en', 'Who was Mahatma Gandhi?', 'history.india.gandhi');
manager.addDocument('en', 'Tell me about Mahatma Gandhi', 'history.india.gandhi');
manager.addDocument('en', 'What did Mahatma Gandhi do?', 'history.india.gandhi');
manager.addDocument('en', 'What role did Gandhi play in Indian history?', 'history.india.gandhi');
manager.addDocument('en', 'Why is Gandhi important in Indian history?', 'history.india.gandhi');
manager.addAnswer('en', 'history.india.gandhi', 'Mahatma Gandhi was a leader of the Indian independence movement, known for his philosophy of non-violent resistance. To learn more, visit Hall 6 dedicated to Mahatma Gandhi and his contributions.');

// Indian History - Mughal Empire
manager.addDocument('en', 'Tell me about the Mughal Empire', 'history.india.mughal');
manager.addDocument('en', 'What is the history of the Mughal Empire?', 'history.india.mughal');
manager.addDocument('en', 'Who were the Mughal rulers?', 'history.india.mughal');
manager.addDocument('en', 'What was the Mughal Empire?', 'history.india.mughal');
manager.addDocument('en', 'Give me some information about the Mughal Empire', 'history.india.mughal');
manager.addAnswer('en', 'history.india.mughal', 'The Mughal Empire was a prominent empire in Indian history, ruling from the early 16th to the 18th century, known for its rich cultural contributions and powerful rulers like Akbar and Shah Jahan. Visit Hall 3 for a detailed exploration of the Mughal Empire.');

// Indian History - Freedom Fighters
manager.addDocument('en', 'Who were the freedom fighters of India?', 'history.india.freedomfighters');
manager.addDocument('en', 'Tell me about Indian freedom fighters', 'history.india.freedomfighters');
manager.addDocument('en', 'Name some important Indian freedom fighters', 'history.india.freedomfighters');
manager.addDocument('en', 'Who fought for India\'s independence?', 'history.india.freedomfighters');
manager.addDocument('en', 'Give me a list of Indian freedom fighters', 'history.india.freedomfighters');
manager.addAnswer('en', 'history.india.freedomfighters', 'Some of the prominent Indian freedom fighters include Mahatma Gandhi, Bhagat Singh, Subhas Chandra Bose, Rani Lakshmibai, and Sardar Vallabhbhai Patel. You can learn more in Hall 7 dedicated to India\'s freedom fighters.');

// World History - World War I
manager.addDocument('en', 'When did World War I start?', 'history.world.ww1');
manager.addDocument('en', 'Tell me about World War I', 'history.world.ww1');
manager.addDocument('en', 'What were the causes of World War I?', 'history.world.ww1');
manager.addDocument('en', 'Who fought in World War I?', 'history.world.ww1');
manager.addDocument('en', 'How did World War I end?', 'history.world.ww1');
manager.addAnswer('en', 'history.world.ww1', 'World War I began on July 28, 1914, and ended on November 11, 1918. It involved many of the world\'s great powers, which were divided into two opposing alliances: the Allies and the Central Powers. To explore more, visit Hall 9 dedicated to the World Wars.');

// World History - World War II
manager.addDocument('en', 'When did World War II start?', 'history.world.ww2');
manager.addDocument('en', 'Tell me about World War II', 'history.world.ww2');
manager.addDocument('en', 'What were the causes of World War II?', 'history.world.ww2');
manager.addDocument('en', 'Who were the main countries in World War II?', 'history.world.ww2');
manager.addDocument('en', 'How did World War II end?', 'history.world.ww2');
manager.addAnswer('en', 'history.world.ww2', 'World War II started on September 1, 1939, and ended on September 2, 1945. It was a global war involving the Allies, led by the US, UK, and Soviet Union, and the Axis powers, led by Germany, Italy, and Japan. Visit Hall 10 for detailed exhibits on World War II.');

// World History - Industrial Revolution
manager.addDocument('en', 'What was the Industrial Revolution?', 'history.world.industrial');
manager.addDocument('en', 'Tell me about the Industrial Revolution', 'history.world.industrial');
manager.addDocument('en', 'When did the Industrial Revolution start?', 'history.world.industrial');
manager.addDocument('en', 'What were the impacts of the Industrial Revolution?', 'history.world.industrial');
manager.addDocument('en', 'Where did the Industrial Revolution begin?', 'history.world.industrial');
manager.addAnswer('en', 'history.world.industrial', 'The Industrial Revolution began in the late 18th century in Britain and led to major changes in industry, economy, and society, marking the transition from agrarian societies to industrialized ones. Explore Hall 4 to learn more about the Industrial Revolution.');

// World History - French Revolution
manager.addDocument('en', 'When did the French Revolution start?', 'history.world.frenchrevolution');
manager.addDocument('en', 'Tell me about the French Revolution', 'history.world.frenchrevolution');
manager.addDocument('en', 'What caused the French Revolution?', 'history.world.frenchrevolution');
manager.addDocument('en', 'Who were the key figures in the French Revolution?', 'history.world.frenchrevolution');
manager.addDocument('en', 'How did the French Revolution impact the world?', 'history.world.frenchrevolution');
manager.addAnswer('en', 'history.world.frenchrevolution', 'The French Revolution started in 1789 and led to the overthrow of the monarchy, the rise of Napoleon, and significant social and political changes in France and beyond. Visit Hall 11 to learn about the French Revolution.');

// World History - Renaissance
manager.addDocument('en', 'What was the Renaissance?', 'history.world.renaissance');
manager.addDocument('en', 'Tell me about the Renaissance period', 'history.world.renaissance');
manager.addDocument('en', 'When did the Renaissance begin?', 'history.world.renaissance');
manager.addDocument('en', 'What were the key features of the Renaissance?', 'history.world.renaissance');
manager.addDocument('en', 'Who were important figures of the Renaissance?', 'history.world.renaissance');
manager.addAnswer('en', 'history.world.renaissance', 'The Renaissance was a cultural movement that began in Italy in the 14th century and spread across Europe, characterized by a revival of classical learning, art, and humanism. Hall 12 features exhibits on the Renaissance and its key figures.');

// World History - Cold War
manager.addDocument('en', 'What was the Cold War?', 'history.world.coldwar');
manager.addDocument('en', 'Tell me about the Cold War', 'history.world.coldwar');
manager.addDocument('en', 'When did the Cold War start?', 'history.world.coldwar');
manager.addDocument('en', 'Who were the main countries in the Cold War?', 'history.world.coldwar');
manager.addDocument('en', 'What were the effects of the Cold War?', 'history.world.coldwar');
manager.addAnswer('en', 'history.world.coldwar', 'The Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies, lasting from 1947 to 1991, marked by political, military, and ideological conflicts. Visit Hall 13 for an in-depth look at the Cold War.');

// ticket refund policy 
// User intents for asking about the refund policy
manager.addDocument('en', 'What is the ticket refund policy?', 'ticket.refund');
manager.addDocument('en', 'Can I get a refund for my tickets?', 'ticket.refund');
manager.addDocument('en', 'How do I apply for a ticket refund?', 'ticket.refund');
manager.addDocument('en', 'Is it possible to refund my tickets?', 'ticket.refund');
manager.addDocument('en', 'How long does it take to get a refund?', 'ticket.refund');
manager.addDocument('en', 'What are the conditions for a ticket refund?', 'ticket.refund');
manager.addDocument('en', 'Can I get a full refund on my ticket?', 'ticket.refund');
manager.addDocument('en', 'Are there any fees for refunding a ticket?', 'ticket.refund');
manager.addDocument('en', 'Can I cancel and get a refund?', 'ticket.refund');
manager.addDocument('en', 'Please explain the refund policy for tickets.', 'ticket.refund');


// Responses from the chatbot about the refund policy
manager.addAnswer('en', 'ticket.refund', 'Our refund policy allows you to get a refund within 30 days of purchase, provided that the tickets have not been used.');
manager.addAnswer('en', 'ticket.refund', 'You can apply for a ticket refund through our website or by contacting customer service.');
manager.addAnswer('en', 'ticket.refund', 'Refunds are typically processed within 5-7 business days after the request is approved.');
manager.addAnswer('en', 'ticket.refund', 'To be eligible for a refund, the tickets must not have been scanned or used for entry.');
manager.addAnswer('en', 'ticket.refund', 'A small processing fee may apply to ticket refunds. Please check the details on our website.');
manager.addAnswer('en', 'ticket.refund', 'Full refunds are available if the refund request is made within 24 hours of purchase.');
manager.addAnswer('en', 'ticket.refund', 'If you cancel your tickets, you can get a refund based on the refund policy. Please note that certain conditions apply.');
manager.addAnswer('en', 'ticket.refund', 'For more information about ticket refunds, please visit our refund policy page or contact support.');
manager.addAnswer('en', 'ticket.refund', 'Refund requests made after the event date may not be honored.');
manager.addAnswer('en', 'ticket.refund', 'Tickets purchased with promotional discounts may not be eligible for a full refund.');


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
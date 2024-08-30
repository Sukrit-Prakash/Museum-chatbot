const express = require('express');
const bodyParser = require('body-parser');
// const { NlpManager } = require('node-nlp');
const mongoose = require('mongoose');
const cors = require('cors');
// const Ticket = require('./Ticketmodel');
const Ticket = require('./Ticketmodel')
const app = express();
const port = 3000;
const manager = require('./nlpManager2');

// const manager = require('./nlpManager'); // separating this to claen up code
// Use CORS middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect('mongodb+srv://sukritprakash2020:2iB9icnhl3niLL8I@inventory.lohzopz.mongodb.net', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
 mongoose.connect('mongodb+srv://sukritprakash2020:2iB9icnhl3niLL8I@inventory.lohzopz.mongodb.net')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log(error);
  });

// Initialize NLP Manager
// const manager = new NlpManager({ languages: ['en'] });
// const manager = new NlpManager({ languages: ['en', 'es'] });

// Train the NLP model with some intents and answers
// Intents
// manager.addDocument('en', 'Can you give me information about the museum?', 'museum.info');
// manager.addDocument('en', 'What is the museum?', 'museum.info');
// manager.addDocument('en', 'Tell me the visiting hours', 'museum.hours');
// manager.addDocument('en','what are visiting hours','museum.hours');
// manager.addDocument('en', 'When can I visit the museum?', 'museum.hours');
// manager.addDocument('en', 'What time does the museum open?', 'museum.hours');
// manager.addDocument('en', 'What time does the museum close?', 'museum.hours');
// manager.addDocument('en', 'Is the museum open today?', 'museum.hours');

// Responses
// manager.addAnswer('en', 'museum.info', 'The museum showcases a wide range of historical artifacts.');
// manager.addAnswer('en', 'museum.hours', 'Opening Hours  Tuesday - Sunday: 10:00 AM - 6:00 PM  and Closed on Mondays and national holidays');


// ticket confirmation 
// Add intent for confirming ticket purchase
// manager.addDocument('en', 'Confirm my tickets', 'ticket.confirm');
// manager.addDocument('en', 'I want to confirm the tickets', 'ticket.confirm');
// manager.addDocument('en', 'Go ahead and confirm the tickets', 'ticket.confirm');
// manager.addDocument('en','[CONFIRM]','ticket.confirm');
// manager.addDocument('en','CONFIRM','ticket.confirm');
// manager.addAnswer('en', 'ticket.confirm', 'Please confirm your name and the number of tickets to proceed.');

// Ticket booking intents
// manager.addDocument('en', 'I want to buy a ticket', 'ticket.purchase');
// manager.addDocument('en', 'Buy tickets', 'ticket.purchase');
// manager.addAnswer('en', 'ticket.purchase', 'How many tickets would you like to purchase?');
// FOR TICKET BUYING INTENT
// manager.addDocument('en', 'I want to buy %number% tickets', 'ticket.count');
// manager.addAnswer('en', 'ticket.count', 'Okay, %number% tickets. Please provide your name for the reservation.');

// Add intent for capturing the user's name
// manager.addDocument('en', 'My name is %name%', 'ticket.name');
// manager.addDocument('en', 'I am %name%', 'ticket.name');
// manager.addDocument('en', 'Call me %name%', 'ticket.name');
// manager.addDocument('en', 'It\'s %name%', 'ticket.name');
// manager.addDocument('en', 'The name is %name%', 'ticket.name');
// manager.addDocument('en', 'Call me %name%', 'ticket.name');
// manager.addDocument('en', "It's %name%", 'ticket.name');
// manager.addDocument('en', 'The name is %name%', 'ticket.name');
// manager.addDocument('en', 'Hello, my name is %name%', 'ticket.name');
// manager.addDocument('en', 'You can call me %name%', 'ticket.name');
// manager.addDocument('en', 'People call me %name%', 'ticket.name');
// manager.addDocument('en', 'Everyone calls me %name%', 'ticket.name');
// manager.addDocument('en', 'The name you need is %name%', 'ticket.name');

// Use a generic name entity
// manager.addNamedEntityText(
//   'name',
//   'name',
//   ['en'],
//   ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah']
// );

// manager.addAnswer('en', 'ticket.name', 'Thank you %name%! Your tickets will be reserved under your name.');

// some intents in spanish
// Spanish intents
// manager.addDocument('es', '¿Puedes darme información sobre el museo?', 'museum.info');
// manager.addDocument('es', '¿Qué es el museo?', 'museum.info');
// manager.addDocument('es', 'Dime el horario de visitas', 'museum.hours');
// manager.addDocument('es', '¿Cuándo puedo visitar el museo?', 'museum.hours');
// manager.addDocument('es', '¿A qué hora abre el museo?', 'museum.hours');
// manager.addDocument('es', '¿A qué hora cierra el museo?', 'museum.hours');
// manager.addDocument('es', '¿Está abierto el museo hoy?', 'museum.hours');

// Spanish responses
// manager.addAnswer('es', 'museum.info', 'El museo exhibe una amplia gama de artefactos históricos.');
// manager.addAnswer('es', 'museum.hours', 'Horario de apertura: Martes - Domingo: 10:00 AM - 6:00 PM y cerrado los lunes y festivos nacionales.');

// Ticket purchase intents in Spanish
// manager.addDocument('es', 'Quiero comprar una entrada', 'ticket.purchase');
// manager.addDocument('es', 'Comprar entradas', 'ticket.purchase');
// manager.addAnswer('es', 'ticket.purchase', '¿Cuántas entradas te gustaría comprar?');

// manager.addDocument('es', 'Quiero comprar %number% entradas', 'ticket.count');
// manager.addAnswer('es', 'ticket.count', 'Vale, %number% entradas. Por favor, proporciona tu nombre para la reserva.');

// Name intent in Spanish
// manager.addDocument('es', 'Me llamo %name%', 'ticket.name');
// manager.addAnswer('es', 'ticket.name', 'Gracias %name%! Tus entradas estarán reservadas a tu nombre.');




(async () => {
  await manager.addCorpus('./corpus-en.json');
  await manager.addCorpus('./corpus-es.json');
  await manager.train();
  manager.save();
})();

app.post('/chat', async (req, res) => {
  const { locale, message } = req.body;
  console.log(message);

  try {
    const response = await manager.process(locale || 'en', message);
    console.log(response);

    // Check if headers are already sent
    if (!res.headersSent) {
      if (response.intent === 'ticket.purchase') {
        res.json({ answer: response.answer });
      } else if (response.intent === 'ticket.count') {
        const personsEntity = response.entities.find(entity => entity.entity === 'number');
        if (personsEntity) {
          const persons = personsEntity.resolution.value;
          res.json({ answer: `Okay, ${persons} tickets. Please provide your name for the reservation.` });
        } else {
          res.json({ answer: 'Sorry, I didn’t catch the number of tickets. How many tickets would you like to purchase?' });
        }
      } else if (response.intent === 'ticket.name') {
        const nameEntity = response.entities.find(entity => entity.entity === 'name');
        if (nameEntity) {
          const userName = nameEntity.sourceText;
          // res.json({ answer: `Thank you ${userName}! Your tickets will be reserved under your name.` });
          const personsEntity = response.entities.find(entity => entity.entity === 'number');
          res.json({answer:`press [CONFIRM] to confirm your ${personsEntity} under the name ${userName}`})
        } else {
          res.json({ answer: 'Sorry, I didn’t catch your name. Could you please repeat it?' });
        }
        
      } else if (response.intent === 'ticket.confirm') {
        const { name, persons } = req.body;
        const pricePerTicket = 50; // Example: $10 per ticket
        const totalPrice = persons * pricePerTicket;
  
        const ticket = new Ticket({
          userName: name,
          persons,
          totalPrice,
        });
       console.log({ticket})
        await ticket.save();
  
        // res.json({ answer: `Thank you, ${name}. Your total is $${totalPrice}. Your tickets are confirmed!` });
        // const qrCodeImageUrl = './images/qr_code.jpg'; // Update this with the actual path
        res.json({ 
          answer: `Thank you, ${name}. Your total is $${totalPrice}. Your tickets are confirmed!`,
          showQRCode: true
        });
      } else {
        res.json({ answer: response.answer });
      }
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
  });
  
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
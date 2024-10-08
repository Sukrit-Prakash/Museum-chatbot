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
        
      }
      else if(response.intent === 'ticket.cancel')
      {
        // const nameEntity = response.entities.find(entity => entity.entity === 'name');
        // if(nameEntity)
        //   const username = nameEntity.sourceText;
        res.json({answer:'your tickets has been cancelled'})
        // res.json({ 
        //   answer: `your tickets has been cancelled `,
        //   showQRCode: true
        // });
      }
      else if (response.intent === 'ticket.confirm') {
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
  
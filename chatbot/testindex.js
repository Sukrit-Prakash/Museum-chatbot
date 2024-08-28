app.post('/chat', async (req, res) => {
    const { message } = req.body;
    console.log(message);
  
    const response = await manager.process('en', message);
    console.log(response);
  
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
          res.json({ answer: `Thank you ${userName}! Your tickets will be reserved under your name.` });
        } else {
          res.json({ answer: 'Sorry, I didn’t catch your name. Could you please repeat it?' });
        }
      } else if (response.intent === 'ticket.confirm') {
        const { name, persons } = req.body;
        const pricePerTicket = 10; // Example: $10 per ticket
        const totalPrice = persons * pricePerTicket;
  
        const ticket = new Ticket({
          userName: name,
          persons,
          totalPrice,
        });
  
        await ticket.save();
  
        res.json({ answer: `Thank you, ${name}. Your total is $${totalPrice}. Your tickets are confirmed!` });
      } else {
        res.json({ answer: response.answer });
      }
    }
  });
  
const { dockStart } = require('@nlpjs/basic');
const cors = require('cors');
const express = require('express');


(async () => {
  const dock = await dockStart({
    use: [
      'Basic',
      'LangEs',
      'ConsoleConnector',
      'ExpressApiServer', // This enables the API server
      'DirectlineConnector'
    ]
  });

  const nlp = dock.get('nlp');
  await nlp.train();

  // Process request through Express API server
  const server = dock.get('api-server');
  
  // Use CORS to allow requests from different origins
  server.app.use(cors());

  server.app.post('/chat', async (req, res) => {
    const { locale, message } = req.body;
    const response = await nlp.process(locale, message);
    res.json(response);
  });

  server.start({ port: 4000 }); // Change the port here
})();








// const { dockStart } = require('@nlpjs/basic');

// (async () => {
//   const dock = await dockStart({ use: ['Basic']});
//   const nlp = dock.get('nlp');
// //   await nlp.addCorpus('./corpus-en.json');
//   await nlp.train();
// //   const response = await nlp.process('en', 'who are you ');
// //   console.log(response);
// })();





// const { dockStart } = require('@nlpjs/basic');

// (async () => {
//   await dockStart();
// })();



// const { dockStart } = require('@nlpjs/basic');

// (async ()=>{
//     const dock = await dockStart({use:['Basic']})
//     const nlp = dock.get('nlp')
//     nlp.addLanguage('en')

//     nlp.addDocument('en', 'goodbye for now', 'greetings.bye');
//     nlp.addDocument('en', 'bye bye take care', 'greetings.bye');
//     nlp.addDocument('en', 'okay see you later', 'greetings.bye');
//     nlp.addDocument('en', 'bye for now', 'greetings.bye');
//     nlp.addDocument('en', 'i must go', 'greetings.bye');
//     nlp.addDocument('en', 'hello', 'greetings.hello');
//     nlp.addDocument('en', 'hi', 'greetings.hello');
//     nlp.addDocument('en', 'howdy', 'greetings.hello');


//     // train the chatbot 
//     nlp.addDocument('en','i want to buy  a ticket','ticket.book')
//     nlp.addDocument('en','i want ticket','ticket.book')
//     nlp.addDocument('en','ticket booking','ticket.book')
//     nlp.addDocument('en','how to get ticket','ticket.book')
//     // train also NLG for ticket booking
//     nlp.addAnswer('en','ticket.book','how many persons would like to buy a ticket')
//     nlp.addAnswer('en','ticket.book','for how many persons would like to visit')
//     nlp.addAnswer('en','ticket.book','ticket for how many persons ')

    
//     // Train also the NLG
//     nlp.addAnswer('en', 'greetings.bye', 'Till next time');
//     nlp.addAnswer('en', 'greetings.bye', 'see you soon!');
//     nlp.addAnswer('en', 'greetings.hello', 'Hey there!');
//     nlp.addAnswer('en', 'greetings.hello', 'Greetings!');  
//     await nlp.train();
//     const response = await nlp.process('en', 'I want to buy ticket');
//     console.log(response);
//   })();













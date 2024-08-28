import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [stage, setStage] = useState(''); // Tracks the current conversation stage
    const [ticketInfo, setTicketInfo] = useState({ persons: 0, name: '' }); // Stores user input
    // ....................for language
    const [language, setLanguage] = useState('en');


    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { sender: 'user', text: 'user: ' + input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            let botMessage;

            if (stage === 'awaitingTickets') {
                // Handle the user input as the number of tickets
                setTicketInfo({ ...ticketInfo, persons: parseInt(input) });
                const response = await axios.post('http://localhost:3000/chat', { message: `I want to buy ${input} tickets` });
                botMessage = { sender: 'bot', text: 'curio: ' + response.data.answer };
                setStage('awaitingName'); // Update the stage to await the user's name
            } else if (stage === 'awaitingName') {
                // Handle the user input as the name
                setTicketInfo({ ...ticketInfo, name: input });
                const response = await axios.post('http://localhost:3000/chat', { 
                    message: `My name is ${input}`, 
                    name: input, 
                    persons: ticketInfo.persons 
                });
                botMessage = { sender: 'bot', text: 'curio: ' + response.data.answer };
                setStage('awaitingConfirmation'); // Reset the stage after completing the process
                
            }
            else if(stage === 'awaitingConfirmation')
                {
                    const response = await axios.post('http://localhost:3000/chat', {
                        message: 'Confirm my tickets',
                        name: ticketInfo.name,
                        persons: ticketInfo.persons
                      });
                      botMessage = { sender: 'bot', text: 'curio: ' + response.data.answer };
                      setStage('');
                }
             else {
                // Regular conversation
                // const response = await axios.post('http://localhost:3000/chat', { message: input });
                // ..............
                 const response = await axios.post('http://localhost:3000/chat', { 
                  body: JSON.stringify({ locale: language, message:input }),
                 })

                botMessage = { sender: 'bot', text: 'curio: ' + response.data.answer };

                // If the bot asks for the number of tickets, update the stage
                if (response.data.answer.includes('How many tickets')) {
                    setStage('awaitingTickets');
                } else if (response.data.answer.includes('Please provide your name')) {
                    setStage('awaitingName');
                }
                else if(response.data.answer.includes('press [CONFIRM]')){
                setStage('awaitingConfirmation')}
            }

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const botMessage = { sender: 'bot', text: 'Sorry, something went wrong.' };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }

        setInput('');
    };

    return (
        <>
            <button onClick={toggleChat} className="chat-toggle-button">
                {isOpen ? 'Close Chat' : 'Chat with us'}
            </button>

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">Museum Chatbot</div>
                    <div className="chat-body">
                    <select onChange={(e) => setLanguage(e.target.value)} value={language}>
//               <option value="en">English</option>
//               <option value="es">Español</option>
//                   </select>
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type a message..."
                        />
                        {/* <button onClick={handleSendMessage}>Send</button> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;













// import React, { useState } from 'react';
// import './ChatbotButton.css';

// function ChatbotButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState([]);
//   const [language, setLanguage] = useState('en');

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   const sendMessage = async () => {
//     const res = await fetch('http://localhost:3000/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ locale: language, message }),
//     });
//     const data = await res.json();
//     setResponse((prev) => [...prev, { user: message, bot: data.answer }]);
//     setMessage('');
//   };
  

//   return (
//     <div className="chatbot-container">
//       <button className="chatbot-button" onClick={toggleChatbot}>
//         Chat with us
//       </button>
//       {isOpen && (
//         <div className="chatbot-popup">
//           <div className="chatbot-header">
//             <span>Chatbot</span>
//             <button onClick={toggleChatbot} className="close-button">&times;</button>
//           </div>
//           <div className="chatbot-body">
//             <select onChange={(e) => setLanguage(e.target.value)} value={language}>
//               <option value="en">English</option>
//               <option value="es">Español</option>
//             </select>
//             <div className="chat-window">
//               {response.map((chat, index) => (
//                 <div key={index}>
//                   <p><strong>You:</strong> {chat.user}</p>
//                   <p><strong>Bot:</strong> {chat.bot}</p>
//                 </div>
//               ))}
//             </div>
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ChatbotButton;

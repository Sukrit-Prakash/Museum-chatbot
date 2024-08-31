import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [stage, setStage] = useState('');
  const [ticketInfo, setTicketInfo] = useState({ persons: 0, name: '' });
  const [language, setLanguage] = useState('en');
  const [showQRCode, setShowQRCode] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

<<<<<<< HEAD
  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: `user: ${input}` };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:3000/chat', {
        locale: language,
        message: input,
        name: ticketInfo.name,
        persons: ticketInfo.persons,
        stage: stage
      });

      let botResponse = "I'm sorry, I couldn't process that. Could you try rephrasing?";
      if (response.data) {
        if (typeof response.data === 'string') {
          botResponse = response.data;
        } else if (response.data.answer) {
          botResponse = response.data.answer;
        } else if (response.data.message) {
          botResponse = response.data.message;
=======
    const handleSendMessage = async () => {
        if (input.trim() === '') return;
    
        const userMessage = { sender: 'user', text: 'user: ' + input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
    
        try {
            const response = await axios.post('http://localhost:3000/chat', {
                locale: language,
                message: input,
                name: ticketInfo.name,
                persons: ticketInfo.persons,
                stage: stage
            });
    
            let botResponse = "I'm sorry, I couldn't process that. Could you try rephrasing?";
            if (response.data) {
                if (typeof response.data === 'string') {
                    botResponse = response.data;
                } else if (response.data.answer) {
                    botResponse = response.data.answer;
                } else if (response.data.message) {
                    botResponse = response.data.message;
                }
            }
    
            if (botResponse === "Sorry, I don't understand" && language === 'es') {
                botResponse = "Lo siento, no entiendo. ¿Podrías reformular tu pregunta?";
            }
    
            const botMessage = { sender: 'bot', text: 'curio: ' + botResponse };
    
            if (stage === 'awaitingTickets') {
                setTicketInfo({ ...ticketInfo, persons: parseInt(input) });
                setStage('awaitingName');
            } else if (stage === 'awaitingName') {
                setTicketInfo({ ...ticketInfo, name: input });
                setStage('awaitingConfirmation');
            } 
            else if (stage === 'awaitingConfirmation') {
                setStage('');
                if (response.data.showQRCode) {
                    setShowQRCode(true);
                }
                setTimeout(() => {
                    setShowQRCode(false);
                }, 8000); // 10000 milliseconds = 10 seconds
            }
            else if (stage === 'awaitingCancellation') {
                setStage('');
                if(showQRCode === true)
                   {setShowQRCode(false);}
                
                
            } else {
                
                const lowerResponse = botResponse.toLowerCase();
                if (lowerResponse.includes('how many tickets') || lowerResponse.includes('cuántos boletos')) {
                    setStage('awaitingTickets');
                } else if (lowerResponse.includes('provide your name') || lowerResponse.includes('proporcione su nombre')) {
                    setStage('awaitingName');
                } else if (lowerResponse.includes('press [confirm]') || lowerResponse.includes('presione [confirmar]')) {
                    setStage('awaitingConfirmation');
                }
                else if(lowerResponse.includes('your tickets has been cancelled')){
                    setStage('awaitingCancellation')
                }
            }
    
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = language === 'es' 
                ? 'Lo siento, algo salió mal.'
                : 'Sorry, something went wrong.';
            const botMessage = { sender: 'bot', text: errorMessage };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
>>>>>>> 5bc1081fd1a1de7880162fc13711d833e900acfe
        }
      }

      if (botResponse === "Sorry, I don't understand" && language === 'es') {
        botResponse = "Lo siento, no entiendo. ¿Podrías reformular tu pregunta?";
      }

      const botMessage = { sender: 'bot', text: `curio: ${botResponse}` };

      if (stage === 'awaitingTickets') {
        setTicketInfo({ ...ticketInfo, persons: parseInt(input) });
        setStage('awaitingName');
      } else if (stage === 'awaitingName') {
        setTicketInfo({ ...ticketInfo, name: input });
        setStage('awaitingConfirmation');
      } else if (stage === 'awaitingConfirmation') {
        setStage('');
        if (response.data.showQRCode) {
          setShowQRCode(true);
          setTimeout(() => {
            setShowQRCode(false);
          }, 8000); // Hide QR code after 8 seconds
        }
      } else if (stage === 'awaitingCancellation') {
        setStage('');
        if (showQRCode) {
          setShowQRCode(false);
        }
      } else {
        const lowerResponse = botResponse.toLowerCase();
        if (lowerResponse.includes('how many tickets') || lowerResponse.includes('cuántos boletos')) {
          setStage('awaitingTickets');
        } else if (lowerResponse.includes('provide your name') || lowerResponse.includes('proporcione su nombre')) {
          setStage('awaitingName');
        } else if (lowerResponse.includes('press [confirm]') || lowerResponse.includes('presione [confirmar]')) {
          setStage('awaitingConfirmation');
        } else if (lowerResponse.includes('your tickets has been cancelled')) {
          setStage('awaitingCancellation');
        }
      }

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = language === 'es'
        ? 'Lo siento, algo salió mal.'
        : 'Sorry, something went wrong.';
      const botMessage = { sender: 'bot', text: errorMessage };
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
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {showQRCode && (
              <div className="qr-code-container">
                <img src="./images/qr_code.jpg" alt="GPay QR Code" className="qr-code-image" />
                <p>Scan this QR code to pay</p>
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

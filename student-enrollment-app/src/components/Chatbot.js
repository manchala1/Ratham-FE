import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../actions/chatbot';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();
  const chatbotMessages = useSelector((state) => state.chatbot.messages);

  const handleUserInput = () => {
    if (userInput) {
      dispatch(addMessage({ text: `User: ${userInput}` }));
      setUserInput('');
    }
  };

  // Chatbot logic for displaying messages and responses goes here

  return (
    <div>
      <div className="chatbot-messages">
        {chatbotMessages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          placeholder="Type your response here"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleUserInput();
            }
          }}
        />
        <button onClick={handleUserInput}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
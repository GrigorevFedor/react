// import logo from './logo.svg';
import './App.css';
import Message from './components/message.js'
import { useState, useEffect } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const addMessageHandle = (e) => {
    setMessageList(messages => [...messages, { text: newMessage, author: 'human' }])
  }

  const changeHandle = (e) => {
    setNewMessage(e.target.value);
  }

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author === 'human') {
        const timer = setTimeout(() => {
          setMessageList((messages) => [...messages, { text: 'hi, im a bot', author: 'bot' }])
        }
          , 1000);
        return () => clearTimeout(timer);
      }
    }

  }, [messageList]);

  return (
    <div className="App">
      <button onClick={addMessageHandle}>Add message</button>
      <input value={newMessage} onChange={changeHandle}></input>
      <div className="mainwrp">
        {messageList.map((message, i) => <Message key={i} messageObj={message} />)}
      </div>
    </div>

  );
}

export default App;

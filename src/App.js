// import logo from './logo.svg';
import './App.css';
import Message from './components/message.js'
import { useState, useEffect, useRef } from 'react';
import { List, ListItem, ListItemText, Grid, Button, TextField } from '@material-ui/core';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [chats, setChats] = useState([]);
  const BOT = 'bot';
  const HUMAN = 'human';
  const inputRef = useRef(null);

  const addMessageHandle = (e) => {
    e.preventDefault();
    setMessageList(messages => [...messages, { text: newMessage, author: HUMAN }])
  }

  const changeHandle = (e) => {
    setNewMessage(e.target.value);
  }

  useEffect(() => {
    setChats((chats) => [...chats, { id: 1, name: 'default' }]);
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author === 'human') {
        const timer = setTimeout(() => {
          setMessageList((messages) => [...messages, { text: 'hi, im a bot', author: BOT }])
        }
          , 1000);
        return () => clearTimeout(timer);
      }
    }

  }, [messageList]);

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List component="nav" aria-label="main mailbox folders">
            {chats.map((chat, i) =>
              <ListItem button key={i}>
                <ListItemText primary={chat.name} />
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid item xs={9}>
          <form onSubmit={addMessageHandle}>
            <TextField id="standard-basic" label="Standard" value={newMessage} onChange={changeHandle} inputRef={inputRef}/>
            <Button variant="contained" type="submit">Add message</Button>
          </form>
          <div className="mainwrp">
            {messageList.map((message, i) => <Message key={i} messageObj={message} />)}
          </div>
        </Grid>
      </Grid>





    </div>

  );
}

export default App;

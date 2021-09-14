import { useState, useEffect, useRef, useCallback } from 'react';
import { List, ListItem, ListItemText, Grid, Button, TextField } from '@material-ui/core';
import { useParams, useHistory, Link } from "react-router-dom";

import Message from './message'
import { Nav } from './nav'
import { Profile } from './profile';

function Chats(props) {
  const [messageList, setMessageList] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChats] = useState([]);
  const BOT = 'bot';
  const HUMAN = 'human';
  const inputRef = useRef(null);
  let { chatId } = useParams();
  const history = useHistory();

  const sendMessage = useCallback(
    (message) => {
      console.log(chatId, message)
      setMessageList((prevMess) => ({...prevMess,[chatId]: [...prevMess[chatId], message],}));
    },
    [chatId]
  );

  const addMessageHandle = 
    (e) => {
      e.preventDefault();
      sendMessage({
        text: newMessage,
        author: HUMAN,
        id: `mess-${Date.now()}`,
      });
    };

  const changeHandle = (e) => {
    setNewMessage(e.target.value);
  }

  const addChat = () => {
    chatId = `chat-${Date.now()}`;
    setChats(chats => [...chats, { name: chatId, id: chatId }])
    setMessageList((messages) => ({...messages, [chatId]: [],}));
  }

  const deleteHandle = ()=>{
    console.log("chatid при поиске", chatId)
    console.log("нашли чат", chats.findIndex(item => item === chatId));
    console.log("чаты перед удалением", chats); 
    setChats((prevChats)=>{return prevChats.splice(prevChats.findIndex(item => item === chatId), 1)});
    // setMessageList((prevMess) => {return delete prevMess[chatId]}); 
    
    console.log("чаты после удаления", chats);
    history.push("/chats/" + chats[0].id);   
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const curMess = messageList[chatId];
   
      if (!!chatId && curMess?.[curMess.length - 1]?.author === HUMAN) {
        const timer = setTimeout(() => {
          sendMessage({
            text: "I am bot",
            author: BOT,
            id: `mess-${Date.now()}`,
          });
        }
          , 1000);
        return () => clearTimeout(timer);
      }
    

  }, [messageList]);

  return (
    <div className="App">
      <Nav />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button variant="contained" type="button" onClick={addChat}>Add chat</Button>
          <List component="nav" aria-label="main mailbox folders">
            {chats.map((chat) =>
              <ListItem button key={chat.id} >
                <Link to={`/chats/${chat.id}`}><ListItemText primary={chat.name} /></Link>
                <Button variant="contained" type="button" onClick={deleteHandle}>Delete chat</Button>
              </ListItem>
            )}
          </List>
        </Grid>
        <Grid item xs={9}>
          <form onSubmit={addMessageHandle}>
            <TextField id="standard-basic" label="Message" value={newMessage} onChange={changeHandle} inputRef={inputRef} />
            <Button variant="contained" type="submit">Add message</Button>
          </form>
          <div className="mainwrp">
            {!!chatId && (messageList[chatId] ? <>
              {messageList[chatId].map((message, i) => <Message key={i} messageObj={message} />)}
              </> : <p>empty</p>
              
            )} 
          </div>
        </Grid>
      </Grid>
    </div>

  );
}

export default Chats;

import { useState, useEffect, useRef, useCallback } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { ChatList } from './chatList'
import Message from './message'
import { Nav } from './nav'
import { AUTHORS } from '../utils/constants'
import { deleteChat } from "../store/chats/actions";
import { addMessage } from "../store/messages/actions";

function Chats(props) {
  const dispatch = useDispatch();

  const [newMessage, setNewMessage] = useState("");

  const messageList = useSelector((state) => state.messages.messages);
  const chats = useSelector((state) => state.chats.chats);
  const inputRef = useRef(null);
  const { chatId } = useParams();
  const history = useHistory();
  console.log(chatId)

  const sendMessage = useCallback(
    (text, author) => {
      console.log(text);
      dispatch(addMessage(chatId, text, author));
    },
    [chatId]
  );

  const AddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  const handleAddMessage = (e)=>{
    e.preventDefault();
    AddMessage(newMessage);
  }

  const changeHandle = (e) => {
    setNewMessage(e.target.value);
  }

  const handleDeleteChat = useCallback(
    (id) => {
      dispatch(deleteChat(id));

      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        history.push(`/chats/${chats[0].id}`);
      } else {
        history.push(`/chats`);
      }
    },
    [chatId, dispatch, chats, history]
  );

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    let timeout;
    const curMess = messageList[chatId];

    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage("I am bot", AUTHORS.BOT);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className="App">
      <Nav />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ChatList chats={chats} onDelete={handleDeleteChat} />
        </Grid>
        <Grid item xs={9}>
          <form onSubmit={handleAddMessage}>
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

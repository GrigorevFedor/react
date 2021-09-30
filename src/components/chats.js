import { useCallback, useEffect, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { ChatList } from './ChatList/chatList'
import Message from './Messages/message'
import { Nav } from './nav'
import { AUTHORS } from '../utils/constants'
import { Form } from './Form/form'
import { selectMessages } from '../store/messages/selectors'
import { addMessageFb, initMessages } from "../store/messages/actions";
import { initChats } from "../store/chats/actions";
import { selectIfChatExists } from "../store/chats/selectors";

function Chats(props) {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  useEffect(() => {
    dispatch(initChats());
    dispatch(initMessages());
  }, []);

  const messageList = useSelector(selectMessages);
  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);
  const chatExists = useSelector(selectChatExists);
  

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageFb(text, author, chatId));
    },
    [chatId]
  );

  const AddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );
  
  return (
    <div className="App">
      <Nav />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <ChatList />
        </Grid>
        <Grid item xs={9}>
          <Form addMessage={AddMessage} />
          {!!chatId && chatExists && (
            <>
              {(Object.values(messageList[chatId] || {}) || []).map((message) => (
                <Message key={message.id} messageObj={message} />
              ))}
              
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;

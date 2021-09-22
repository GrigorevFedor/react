import { useCallback } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { ChatList } from './ChatList/chatList'
import Message from './Messages/message'
import { Nav } from './nav'
import { AUTHORS } from '../utils/constants'
import { addMessageWithReply } from "../store/messages/actions";
import { Form } from './Form/form'
import { selectMessages } from '../store/messages/selectors'


function Chats(props) {
  const dispatch = useDispatch();

  const messageList = useSelector(selectMessages);
  const { chatId } = useParams();

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageWithReply(chatId, text, author));
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

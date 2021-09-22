import { List, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { ChatItem } from './chatItem'
import {addChat} from '../store/chats/actions'

export const ChatList = ({chats, onDelete}) => {
    const dispatch = useDispatch();

    const handleaddChat = () => {
        const chatName = `chat-${Date.now()}`;
        dispatch(addChat(chatName));

    }

    return <>
        <Button variant="contained" type="button" onClick={handleaddChat}>Add chat</Button>
        <List component="nav" aria-label="main mailbox folders">
            {chats.map((chat) =>
                <ChatItem key={chat.id} id={chat.id} name={chat.name} onDelete={onDelete} />
            )}
        </List>
    </>
}
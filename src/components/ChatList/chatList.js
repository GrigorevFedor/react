import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { addChat } from '../../store/chats/actions'
import { ChatListView } from './chatListView'
import { selectChats } from '../../store/chats/selectors'
import { deleteChat } from "../../store/chats/actions";

export const ChatList = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const chats = useSelector(selectChats);
    const { chatId } = useParams();

    const handleaddChat = () => {
        const chatName = `chat-${Date.now()}`;
        dispatch(addChat(chatName));
    }

    const handleDeleteChat = useCallback(
        (id) => {
            dispatch(deleteChat(id));

            if (chatId !== id) {
                return;
            }
            console.log('chats.length', chats.length)
            if (chats.length === 1) {
                history.push(`/chats/${chats[0].id}`);
            } else {
                history.push(`/chats`);
            }
        },
        [chatId, dispatch, chats, history]
    );

    return <ChatListView chats={chats} onDelete={handleDeleteChat} addChat={handleaddChat} />
}
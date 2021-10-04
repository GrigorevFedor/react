import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectFirstChatId } from '../../store/chats/selectors'
import { ChatItemView } from './chatItemView'

export const ChatItem = ({ id, name, onDelete }) => {

    const firstChatId = useSelector(selectFirstChatId);

    const history = useHistory();

    const handleDelete = () => {

        onDelete(id);
        history.push(`/chats/${firstChatId}`);
    };

    return <>
        <ChatItemView id={id} name={name} onDelete={handleDelete}/>
    </>
}
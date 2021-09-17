import { ListItem, ListItemText, Button } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";

import { selectFirstChatId } from '../store/chats/selectors'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const ChatItem = ({ id, name, onDelete }) => {

    // const selectfirstChatId = useMemo(() => selectFirstChatId(),);
    const firstChatId = useSelector(selectFirstChatId);

    const history = useHistory();

    const handleDelete = () => {

        onDelete(id);
        history.push(`/chats/${firstChatId}`);
    };

    return <>
        <ListItem button key={id} >
            <Link to={`/chats/${id}`}><ListItemText primary={name} /></Link>
            <Button variant="contained" type="button" onClick={handleDelete}>Delete chat</Button>
        </ListItem>
    </>
}
import { ListItem, ListItemText, Button } from '@material-ui/core';
import { Link } from "react-router-dom";

export const ChatItemView = ({ onDelete, id, name }) => {
    return <ListItem button key={id} >
        <Link to={`/chats/${id}`}><ListItemText primary={name} /></Link>
        <Button variant="contained" type="button" onClick={onDelete} data-testid='ChatItemViewButton'>Delete chat</Button>
    </ListItem>
}
import { List, Button } from '@material-ui/core';
import { ChatItem } from '../ChatItem/chatItem'

export const ChatListView = ({ chats, onDelete, addChat }) => {
    return <>
        <Button variant="contained" type="button" onClick={addChat}>Add chat</Button>
        <List component="nav" aria-label="main mailbox folders">
            {chats.map((chat) =>
                <ChatItem key={chat.id} id={chat.id} name={chat.name} onDelete={onDelete} />
            )}
        </List>
    </>
}
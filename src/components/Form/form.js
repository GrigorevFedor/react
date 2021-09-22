import { Button, TextField } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';



export const Form = ({ addMessage }) => {
    const [newMessage, setNewMessage] = useState("");
    const inputRef = useRef(null);

    const handleAddMessage = (e) => {
        e.preventDefault();
        addMessage(newMessage);
    }

    const changeHandle = (e) => {
        setNewMessage(e.target.value);
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return <form onSubmit={handleAddMessage}>
        <TextField id="standard-basic" label="Message" value={newMessage} onChange={changeHandle} inputRef={inputRef} />
        <Button variant="contained" type="submit">Add message</Button>
    </form>
}
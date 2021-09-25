import React from 'react';
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});



export const Nav = () => {
    const [value, setValue] = React.useState(0);

    const classes = useStyles();

    const history = useHistory();

    function NavigateTo(route) {
        history.push("/" + route);
    }

    return <>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                NavigateTo(newValue);
            }}
            showLabels
            className={classes.root}
        >
            {/* <BottomNavigationAction label="Home" value="" /> */}
            <BottomNavigationAction label="Chats" value="chats" />
            <BottomNavigationAction label="Profile" value="profile" />
            <BottomNavigationAction label="News" value="news" />
        </BottomNavigation>
    </>;
};


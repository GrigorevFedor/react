import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';

const message = (props) => {
    return <Card >
        <CardContent>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                    </IconButton>
                }
                title={props.messageObj.author}
                subheader=''
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.messageObj.text}
                </Typography>
            </CardContent>
        </CardContent>
    </Card>
}

export default message

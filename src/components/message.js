import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';
// import { makeStyles } from '@material-ui/core/styles';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const message = (props) => {
    return  <Card >
    <CardContent>
        <CardHeader

            action={
                <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
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

// function message(props) {
    



   


//         return (
//             <Card >
//                 <CardContent>
//                     <CardHeader

//                         action={
//                             <IconButton aria-label="settings">
//                                 {/* <MoreVertIcon /> */}
//                             </IconButton>
//                         }
//                         title={props.messageObj.author}
//                         subheader={getCurrDate}
//                     />
//                     <CardContent>
//                         <Typography variant="body2" color="textSecondary" component="p">
//                             {props.messageObj.text}
//                         </Typography>
//                     </CardContent>
//                 </CardContent>
//             </Card>
//         )
    
// }
// export default message
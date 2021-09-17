import { Nav } from './nav'
import { Checkbox } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";

import { toggleAddInfo } from "../store/profile/actions";

export const Profile = () => {

    const showAddInfo = useSelector((state) => state.showAddInfo);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleAddInfo);
        console.log(showAddInfo);
    };

    return <>
        <Nav />
        <div>This is profile</div>
        <Checkbox
            checked={showAddInfo}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        {showAddInfo && <div>Additional info</div>}
    </>
}
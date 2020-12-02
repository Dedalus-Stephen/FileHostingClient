import { useSelector } from 'react-redux'

import { Alert, AlertTitle } from '@material-ui/lab';

function Message() {
    const message = useSelector(state => state.messageContent.message);
    return message ? <Alert severity='info'><AlertTitle>Oops!</AlertTitle>{message}</Alert> : <></>
}

export default Message

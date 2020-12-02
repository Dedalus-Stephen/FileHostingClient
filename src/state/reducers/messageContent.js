import produce from 'immer';

const placeHolder = {
    message: null
}

const messageContent = produce((content = placeHolder, action = { type: "DEFAULT" }) => {
    switch (action.type) {
        case "SET_MESSAGE":
            content.message = action.message
        default: return content;
    }
})

export default messageContent;
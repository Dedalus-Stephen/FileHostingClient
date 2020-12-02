import produce from 'immer';

const placeHolder = {
    id: null,
    origSize: 0,
    resSize: 0
}

const textContent = produce((content = placeHolder, action = { type: "DEFAULT" }) => {
    switch (action.type) {
        case "SET_TEXT_STATS":
            content.origSize = action.origSize
            content.resSize = action.resSize
        case "SET_TEXT_ID":
            content.id = action.id
        default: return content;
    }
})

export default textContent;
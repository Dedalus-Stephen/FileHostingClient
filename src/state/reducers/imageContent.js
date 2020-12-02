import produce from 'immer';

const placeHolder = {
    user_url: "https://kibion.se/content/uploads/2013/06/staff-portrait-placeholder-gray.jpg",
    server_url: "https://kibion.se/content/uploads/2013/06/staff-portrait-placeholder-gray.jpg",
    id: null,
    origSize: 0,
    resSize: 0
}

const imageContent = produce((content = placeHolder, action = { type: "DEFAULT" }) => {
    switch (action.type) {
        case "CHANGE_PRE_IMAGE":
            content.user_url = action.newUrl;
            return content;
        case "CHANGE_POST_IMAGE":
            content.server_url = action.newUrl;
            return content;
        case "SET_IMAGE_STATS":
            content.origSize = action.origSize
            content.resSize = action.resSize
        case "SET_IMAGE_ID":
            content.id = action.id
        default: return content;
    }
})

export default imageContent;